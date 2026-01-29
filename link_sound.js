document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.querySelector(".links-list");
    const firstLink = document.querySelector(".link-item");

    if (!linksList || !firstLink) return;

    const sound = new Audio("link_sound.mp3");
    sound.volume = 0.2;

    let played = false;

    const observer = new MutationObserver(() => {
        if (!linksList.classList.contains("collapsed") && !played) {
            played = true;

            setTimeout(() => {
                sound.currentTime = 0;
                sound.play().catch(() => {});
            }, 50);
        }

        if (linksList.classList.contains("collapsed")) {
            played = false;
        }
    });

    observer.observe(linksList, {
        attributes: true,
        attributeFilter: ["class"]
    });
});