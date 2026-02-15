const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}

function siguiente() {
    audio.currentTime += 10; // avanza 10 segundos
}

function retroceder() {
    audio.currentTime -= 10; // retrocede 10 segundos
}
