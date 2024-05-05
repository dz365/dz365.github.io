window.addEventListener("DOMContentLoaded", function () {
  function handleReminderAppClick() {
    displayReminderAppWindow("All Experiences");
  }

  function handleResumeAppClick() {
    displayResumeAppWindow()
  }
  const reminderApp = document.getElementById("reminderApp");
  reminderApp.addEventListener("click", handleReminderAppClick);

  const resumeApp = document.getElementById("resumeApp");
  resumeApp.addEventListener("click", handleResumeAppClick);
});
