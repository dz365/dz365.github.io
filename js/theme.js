function changeTheme() {
  const button = document.getElementById("change-theme-button");
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  button.textContent = `Toggle ${isDarkTheme ? "light" : "dark"} theme`;
}

window.addEventListener("DOMContentLoaded", function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-theme");
    document.getElementById("change-theme-button").innerHTML =
      "toggle light theme";
  }
});
