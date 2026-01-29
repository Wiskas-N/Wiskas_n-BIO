document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link-item");

    function playSound() {
        if (!window.__linkSoundUnlocked || !window.__linkSoundBase) return;

        const s = window.__linkSoundBase.cloneNode();
        s.volume = window.__linkSoundBase.volume;
        s.currentTime = 0;
        s.play().catch(() => {});
    }

    links.forEach(link => {
        link.addEventListener("animationend", (e) => {
            if (e.animationName !== "boxFallIn") return;
            playSound();
        });
    });
});
