const countdownDisplay = document.getElementById("countdown-display");
let birthdayView = false;
let xmasView = true;

const xmasElements = {
  heading: "Christmas Countdown 🎄",
  
};

function renderCountdown() {
  const christmas = 25;
  const today = new Date().getDate();
  const daysLeft = christmas - today;
  countdownDisplay.innerHTML = daysLeft;

  const xmasDate = new Date("Dec 25, 2023").getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeGap = xmasDate - now;
    const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeGap / (1000 * 60 * 60 * 24)) * 24);
    const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

    document.getElementById(
      "time-display"
    ).innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (timeGap < 0) {
      clearInterval(timer);
      document.getElementById("time-display").innerHTML = "Day has passed.";
    }
  }, 1000);
}

const toggle = (x) => {
  if (x == "xmas") {
    xmasView = true;
    birthdayView = false;
  } else {
    birthdayView = true;
    xmasView = false;
  }
};
renderCountdown();
