function displayResumeAppWindow() {
  const resume = document.createElement("iframe");
  resume.src = "./files/Resume.pdf";
  resume.width = "100%";
  resume.height = "100%";
  const reminderWindow = createWindow(resume);
  document.body.appendChild(reminderWindow);
}
