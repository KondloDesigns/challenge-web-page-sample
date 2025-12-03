const targetDate = new Date("2026-01-12T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "00d 00h 00m 00s";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
