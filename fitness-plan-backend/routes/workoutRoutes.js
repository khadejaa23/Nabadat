router.post("/", async (req, res) => {
  try {
    const plan = new WorkoutPlan(req.body);
    await plan.save();
    res.status(201).json({ message: "✅ تم إنشاء الخطة الرياضية بنجاح", plan });
  } catch (err) {
    res.status(400).json({ error: "❌ حدث خطأ أثناء إنشاء الخطة الرياضية" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const plan = await WorkoutPlan.findOne({ userId: req.params.userId });
    if (!plan) {
      return res.status(404).json({ error: "⚠️ لم يتم العثور على خطة رياضية" });
    }

    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: "❌ حدث خطأ أثناء جلب الخطة الرياضية" });
  }
});
const express = require("express");
const router = express.Router();
const { generateWorkoutPlan } = require("../services/geminiService");
const WorkoutPlan = require("../models/WorkoutPlan");

// إنشاء خطة رياضية باستخدام Gemini API
router.post("/generate", async (req, res) => {
  try {
    const userData = req.body; // البيانات المرسلة من العميل
    const workoutPlan = await generateWorkoutPlan(userData);
    res.json({ plan: workoutPlan });
  } catch (error) {
    res.status(500).json({ error: "❌ حدث خطأ أثناء إنشاء الخطة الرياضية" });
  }
});

// حفظ خطة رياضية جديدة
router.post("/", async (req, res) => {
  try {
    const { userId, exercises } = req.body;
    const newPlan = new WorkoutPlan({ userId, exercises });
    await newPlan.save();
    res.status(201).json({ message: "✅ تم حفظ الخطة الرياضية بنجاح!", newPlan });
  } catch (error) {
    res.status(400).json({ error: "❌ حدث خطأ أثناء حفظ الخطة الرياضية" });
  }
});

module.exports = router;
