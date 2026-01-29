document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const video = document.getElementById('bg-video');

    if (!startScreen || !video) return;

    video.muted = true;
    video.pause();

    function startSite() {
        video.muted = false;
        video.volume = 0.1;

        video.play().catch(() => {});

        startScreen.classList.add('hidden');

        setTimeout(() => {
            startScreen.remove();
        }, 700);
    }

    startScreen.addEventListener('click', startSite);
    startScreen.addEventListener('touchstart', startSite);
});
