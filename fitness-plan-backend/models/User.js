const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true }, // معرف Google OAuth
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  healthStatus: { type: String, required: true },
  availableTime: { type: Number, required: true },
  preferredLocations: [{ type: String }], // ["المنزل", "الشارع", "الصالة الرياضية"]
  budget: { type: Number, required: true } // الميزانية الأسبوعية للطعام
});

module.exports = mongoose.model("User", UserSchema);

