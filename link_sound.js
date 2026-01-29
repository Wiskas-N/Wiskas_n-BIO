document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.querySelector(".links-list");
    const links = document.querySelectorAll(".link-item");

    if (!linksList || !links.length) return;

    const baseSound = new Audio("link_sound.mp3");
    baseSound.volume = 0.25;

    let isOpen = false;

    function restartAnimations() {
        links.forEach(el => el.style.animation = "none");
        void linksList.offsetHeight;
        links.forEach(el => el.style.animation = "");
    }

    function playSound() {
        const s = baseSound.cloneNode();
        s.volume = baseSound.volume;
        s.currentTime = 0;
        s.play().catch(() => {});
    }

    links.forEach(link => {
        link.addEventListener("animationend", (e) => {
            if (e.animationName !== "boxFallIn") return;
            playSound();
        });
    });

    const observer = new MutationObserver(() => {
        const opened = !linksList.classList.contains("collapsed");

        if (opened && !isOpen) {
            isOpen = true;
            restartAnimations();
        }

        if (!opened && isOpen) {
            isOpen = false;
        }
    });

    observer.observe(linksList, {
        attributes: true,
        attributeFilter: ["class"]
    });
});
