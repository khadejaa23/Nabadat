const express = require("express");
const router = express.Router();
const MealPlan = require("../models/MealPlan");

// إنشاء خطة وجبات
router.post("/", async (req, res) => {
    try {
        const mealPlan = new MealPlan(req.body);
        await mealPlan.save();
        res.status(201).json(mealPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// تحديث المكونات المتاحة
router.post("/:userId/update-ingredients", async (req, res) => {
    try {
        const { availableIngredients } = req.body;
        const mealPlan = await MealPlan.findOne({ userId: req.params.userId });

        // Check if mealPlan exists and return 404 if not
        if (!mealPlan) {
            return res.status(404).json({ error: "الخطة غير موجودة" });
        }

        mealPlan.shoppingList = mealPlan.meals.flatMap(meal =>
            meal.ingredients.filter(ingredient => !availableIngredients.includes(ingredient))
        );

        await mealPlan.save();
        res.json(mealPlan);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

router.post("/", async (req, res) => {
    try {
        const mealPlan = new MealPlan(req.body);
        await mealPlan.save();
        res.status(201).json({ message: "✅ تم إنشاء خطة الوجبات بنجاح", mealPlan });
    } catch (err) {
        res.status(400).json({ error: "❌ حدث خطأ أثناء إنشاء خطة الوجبات" });
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const mealPlan = await MealPlan.findOne({ userId: req.params.userId });
        if (!mealPlan) {
            return res.status(404).json({ error: "⚠️ لم يتم العثور على خطة الوجبات" });
        }

        res.json(mealPlan);
    } catch (err) {
        res.status(500).json({ error: "❌ حدث خطأ أثناء جلب بيانات الوجبات" });
    }
});