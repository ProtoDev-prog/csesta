// script.js

const timerElement = document.getElementById('timer');

function updateCountdown() {
  const eventDate = new Date('May 08, 2025 09:00:00').getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    timerElement.innerHTML = "The event has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}  days  ${hours}  hours ${minutes}  minutes ${seconds}  seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
