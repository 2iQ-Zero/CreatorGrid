document.querySelector("button").addEventListener("click", () => {
    const inputs = document.querySelectorAll("textarea");
    const character = inputs[0].value.trim();
    const video = inputs[1].value.trim();

    if (!character || !video) {
        alert("اكتب برومت الشخصية وبرومت الفيديو الأول 👀");
        return;
    }

    alert(
        "تمام 🔥\n\n" +
        "🧠 برومت الشخصية:\n" + character + "\n\n" +
        "🎬 برومت الفيديو:\n" + video + "\n\n" +
        "الخطوة الجاية: ربط الذكاء الاصطناعي"
    );
});
function startAI() {
    const character = document.getElementById("characterPrompt").value.trim();
    const video = document.getElementById("videoPrompt").value.trim();

    if (!character || !video) {
        alert("⚠️ من فضلك اكتب برومت الشخصية وبرومت الفيديو");
        return;
    }

    // مثال: فتح صفحة توليد الصورة في موقع مجاني
    const aiUrl = "https://stablediffusionweb.com/?prompt=" + encodeURIComponent(character);
    window.open(aiUrl, "_blank");

    alert(
        "✅ تم إرسال برومت الشخصية لمولد الصور!\n\n" +
        "الخطوة الجاية: تجهيز 3D والتحريك."
    );
}
