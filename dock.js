window.addEventListener("DOMContentLoaded", function () {
  function handleReminderAppClick() {
    displayReminderWindow("All Experiences");
  }

  const reminderApp = document.getElementById("reminderApp");
  reminderApp.addEventListener("click", handleReminderAppClick);
});
