const button1 = document.getElementById("home");
const button2 = document.getElementById("aboutme");
const epilepsy = document.getElementById("epilepsy")
const div = document.getElementById("introduction");
const video = document.getElementById("bg-video")

button2.addEventListener("click", (e) => {
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
});

button1.addEventListener("click", (e) => {
    window.location.href = "index.html";
});

epilepsy.addEventListener("click", (e) => {
    document.getElementById("warningOverlay").style.display = "none";
    document.getElementById("content").style.display = "block";
    video.play();
});