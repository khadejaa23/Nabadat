

//AIzaSyBxjzUngsJ5H7v3VwDPlj2vTg1RS8jr
const API_KEY = "AIzaSyBxjzUngsJ5H7v3VwDPlj2vTg1RS8jr"; // استبدله بمفتاح API الخاص بك
const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText";

async function askGemini() {
    const userInput = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    if (!userInput.trim()) {
        responseElement.innerHTML = "⚠️ الرجاء إدخال سؤال!";
        return;
    }

    responseElement.innerHTML = "⏳ جاري البحث عن الإجابة...";

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userInput }] }]
            })
        });

        const data = await response.json();
        console.log("📌 استجابة API:", data); // ✅ تحقق من الرد في Console

        if (data.candidates && data.candidates.length > 0) {
            responseElement.innerHTML = "💡 الإجابة: " + data.candidates[0].content.parts[0].text;
        } else {
            responseElement.innerHTML = "❌ لم يتم استرجاع رد. حاول مرة أخرى.";
        }
    } catch (error) {
        console.error("❌ خطأ في جلب البيانات:", error);
        responseElement.innerHTML = "❌ حدث خطأ أثناء الاتصال بـ API.";
    }
}
