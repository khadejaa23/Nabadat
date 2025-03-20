require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
require("./auth/passport"); 
const workoutRoutes = require("./routes/workoutRoutes");
const mealRoutes = require("./routes/mealRoutes");

const app = express();
const i18n = require("./config/i18n");

app.use(i18n.init);

app.get("/", (req, res) => {
  res.send(req.__("messages.welcome"));
});

// إعداد الجلسات
app.use(
  session({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // يوم واحد
  })
);

// إعداد ميدل وير
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());

// إعداد المسارات
app.use("/api/workouts", workoutRoutes);
app.use("/api/meals", mealRoutes);

// الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ متصل بقاعدة البيانات"))
  .catch((err) => console.error("❌ خطأ في الاتصال بقاعدة البيانات", err));

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`));
