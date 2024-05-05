window.addEventListener("DOMContentLoaded", function () {
  function handleReminderAppClick() {
    displayReminderAppWindow("All Experiences");
  }

  const reminderApp = document.getElementById("reminderApp");
  reminderApp.addEventListener("click", handleReminderAppClick);
});
