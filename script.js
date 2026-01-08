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
