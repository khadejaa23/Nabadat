const mongoose = require("mongoose");

const WorkoutPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exercises: [
    {
      name: { type: String, required: true }, // اسم التمرين
      duration: { type: Number, required: true }, // المدة بالدقائق
      location: { type: String, required: true } // أين يتم ممارسة التمرين (المنزل، الشارع، الصالة)
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("WorkoutPlan", WorkoutPlanSchema);

