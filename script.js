// Automatically plays and switches between multiple videos at a fixed interval (homepage)

const videos = document.querySelectorAll('video');
let currentVideoIndex = 0;

if (videos.length > 0) {
    function switchVideo() {
        const currentVideo = videos[currentVideoIndex];
        currentVideo.pause();
        currentVideo.style.display = 'none';

        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        const nextVideo = videos[currentVideoIndex];

        nextVideo.currentTime = 0;
        nextVideo.style.display = 'block';
        nextVideo.play();
    }

    function startFirstVideo() {
        const firstVideo = videos[0];
        firstVideo.style.display = 'block';
        firstVideo.play();
    }

    startFirstVideo();

    const videoSwitchInterval = 5 * 1000;
    setInterval(switchVideo, videoSwitchInterval);
}

// Toggle menu visibility (hamburger menu)

const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
