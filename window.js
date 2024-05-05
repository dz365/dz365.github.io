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

function addWindowActions(window) {
  const windowActions = window.querySelector(".window-actions");

  // Trigger the hover effect on mouse enter
  windowActions.addEventListener("mouseenter", () => {
    windowActions.querySelectorAll("button").forEach((button) => {
      button.classList.add("hovered");
    });
  });

  // Remove the hover effect on mouse leave
  windowActions.addEventListener("mouseleave", () => {
    windowActions.querySelectorAll("button").forEach((button) => {
      button.classList.remove("hovered");
    });
  });
}

function createWindow(content) {
  const window = document.createElement("div");
  window.classList.add("window");
  window.appendChild(createTitlebar());

  const windowContent = document.createElement("div");
  windowContent.classList.add("window-content");
  windowContent.appendChild(content);
  window.appendChild(windowContent);

  const titlebar = window.querySelector(".window-titlebar");
  makeElementDraggable(window, titlebar);

  addWindowActions(window);
  return window;
}
