document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.querySelector(".links-list");
    const links = document.querySelectorAll(".link-item");

    if (!linksList || !links.length) return;

    const soundSrc = "link_sound.mp3";
    const volume = 0.2;

    const interval = 0.3;

    let isOpen = false;
    let timeouts = [];

    function restartAnimations() {
        links.forEach(el => {
            el.style.animation = "none";
        });

        void linksList.offsetHeight;

        links.forEach(el => {
            el.style.animation = "";
        });
    }

    function clearTimers() {
        timeouts.forEach(t => clearTimeout(t));
        timeouts = [];
    }

    function playSoundForEach() {
        clearTimers();

        links.forEach((link, index) => {
            const delay = index * interval * 300;

            const t = setTimeout(() => {
                const s = new Audio(soundSrc);
                s.volume = volume;
                s.play().catch(() => {});
            }, delay);

            timeouts.push(t);
        });
    }

    const observer = new MutationObserver(() => {
        const opened = !linksList.classList.contains("collapsed");

        if (opened && !isOpen) {
            isOpen = true;

            restartAnimations();
            playSoundForEach();
        }

        if (!opened && isOpen) {
            isOpen = false;
            clearTimers();
        }
    });

    observer.observe(linksList, {
        attributes: true,
        attributeFilter: ["class"]
    });
});
