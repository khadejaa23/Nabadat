const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  age: Number,
  weight: Number,
  healthStatus: String,
  availableTime: String,
  preferredLocations: [String],
  budget: Number,
});

module.exports = mongoose.model("User", UserSchema);
