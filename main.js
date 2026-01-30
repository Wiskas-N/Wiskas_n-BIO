document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    if (video) {
        video.volume = 1.0;
        video.muted = true;
        video.pause();
    }
});

