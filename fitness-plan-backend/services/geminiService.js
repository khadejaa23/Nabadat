require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Removed duplicate declaration of genAI
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateWorkoutPlan(userData) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
      أنت مدرب رياضي محترف. قم بإنشاء خطة رياضية مخصصة بناءً على المعلومات التالية:
      - العمر: ${userData.age}
      - الوزن: ${userData.weight} كجم
      - الحالة الصحية: ${userData.healthStatus}
      - الوقت المتاح يوميًا: ${userData.availableTime} دقيقة
      - الأماكن المتاحة لممارسة الرياضة: ${userData.preferredLocations.join(", ")}
      
      يجب أن تحتوي الخطة على تمارين مناسبة لكل موقع، ومدتها بالدقائق، ومستوى الصعوبة.
    `;

        const response = await model.generateContent(prompt);
        return response.response.text();
    } catch (error) {
        console.error("❌ خطأ أثناء إنشاء الخطة الرياضية:", error);
        return "حدث خطأ أثناء إنشاء الخطة الرياضية.";
    }
}

module.exports = { generateWorkoutPlan };
