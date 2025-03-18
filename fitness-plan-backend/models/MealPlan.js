const mongoose = require("mongoose");

const MealPlanSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  meals: [
    {
      name: String,
      ingredients: [String],
    },
  ],
  shoppingList: [String], // قائمة المشتريات
});

module.exports = mongoose.model("MealPlan", MealPlanSchema);
