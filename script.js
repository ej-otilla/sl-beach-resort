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

// Current weather conditions in Cancun, Mexico

fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=8ce0e2985d2cd788288e7470054dd507&units=metric")

.then(response => response.json())
.then(data => {
    const roundedTemp = Math.round(data.main.temp);
    temperature.textContent = "Current Conditions: " + roundedTemp + "°C";

    const weatherIcon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    icon.src = weatherIcon;
    icon.alt = data.weather[0].description;
    icon.style.display = "inline-block";
})