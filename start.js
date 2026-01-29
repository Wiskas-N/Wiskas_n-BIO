document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const video = document.getElementById('bg-video');

    if (!startScreen || !video) return;

    video.muted = true;
    video.pause();

    const linkSound = new Audio("link_sound.mp3");
    linkSound.volume = 0.25;

    function startSite() {
        video.muted = false;
        video.volume = 0.1;
        video.play().catch(() => {});

        linkSound.play().then(() => {
            linkSound.pause();
            linkSound.currentTime = 0;

            window.__linkSoundUnlocked = true;
            window.__linkSoundBase = linkSound;
        }).catch(() => {});

        startScreen.classList.add('hidden');

        setTimeout(() => {
            startScreen.remove();
        }, 700);
    }

    startScreen.addEventListener('click', startSite);
    startScreen.addEventListener('touchstart', startSite);
});
