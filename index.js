const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDate() {
  const currentDate = new Date();

  const dayOfWeek = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  return dayOfWeek + ", " + month + " " + dayOfMonth;
}

function getTime() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
}

window.onload = function () {
  document.getElementById("login-date").textContent = getDate();
  document.getElementById("login-time").textContent = getTime();
  const password = document.getElementById("password");
  const passwordIcon = document.getElementById("enter-password-icon");
  const placeholder = "Hello World!";
  let count = 0;

  function typeText() {
    password.value = placeholder.slice(0, count);
    count++;

    if (count <= placeholder.length) setTimeout(typeText, 150); // Typing speed
    if (count > 1) passwordIcon.style.visibility = "visible";
    if (count > placeholder.length) {
      document.getElementById("login-page").style.display = "none";
      document.getElementById("main-page").style.display = "block";
    }
  }

  setTimeout(typeText, 750); // Start typing after delay
};
