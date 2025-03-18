const mongoose = require("mongoose");

const WorkoutPlanSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activities: [
    {
      type: String,
      duration: Number, // بالدقائق
      location: String, // منزل، صالة رياضية، شارع
    },
  ],
});

module.exports = mongoose.model("WorkoutPlan", WorkoutPlanSchema);
