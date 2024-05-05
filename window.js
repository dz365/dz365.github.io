function createWindow(content) {
  function createTitlebar() {
    const titlebar = document.createElement("div");
    titlebar.classList.add("window-titlebar");
    titlebar.innerHTML = `
      <div class="window-actions">
        <button class="close-button"></button>
        <button class="minimize-button"></button>
        <button class="expand-button"></button>
      </div>
    `;
    return titlebar;
  }
  const window = document.createElement("div");
  window.classList.add("window");
  window.appendChild(createTitlebar());

  const windowContent = document.createElement("div");
  windowContent.classList.add("window-content");
  windowContent.appendChild(content);
  window.appendChild(windowContent);
  return window;
}
