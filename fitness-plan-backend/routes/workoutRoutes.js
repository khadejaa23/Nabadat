const express = require("express");
const router = express.Router();
const WorkoutPlan = require("../models/WorkoutPlan");

// إنشاء خطة رياضية
router.post("/", async (req, res) => {
  try {
    const plan = new WorkoutPlan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// جلب خطة المستخدم
router.get("/:userId", async (req, res) => {
  try {
    const plan = await WorkoutPlan.findOne({ userId: req.params.userId });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
