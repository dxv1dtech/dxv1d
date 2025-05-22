const button1 = document.getElementById("home");
const button2 = document.getElementById("aboutme");
const div = document.getElementById("introduction");

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