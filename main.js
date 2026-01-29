document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    if (video) {
        video.volume = 0.7;
        video.muted = true;
        video.pause();
    }
});
