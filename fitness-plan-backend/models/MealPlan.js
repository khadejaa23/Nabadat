const mongoose = require("mongoose");

const MealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  meals: [
    {
      name: { type: String, required: true }, // اسم الوجبة
      ingredients: [{ type: String }], // المكونات المطلوبة
      calories: { type: Number, required: true } // السعرات الحرارية
    }
  ],
  shoppingList: [{ type: String }], // المكونات غير المتوفرة التي يجب شراؤها
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("MealPlan", MealPlanSchema);

