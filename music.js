const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');

// Auto-play on load (browsers require user interaction, so this may be blocked)
window.addEventListener('DOMContentLoaded', () => {
  audio.play().catch(() => {
    // Autoplay blocked by browser
    playPauseBtn.textContent = '▶️';
  });
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
});

audio.addEventListener('timeupdate', () => {
  progress.value = audio.currentTime;
  progress.max = audio.duration;
});

progress.addEventListener('input', () => {
  audio.currentTime = progress.value;
});