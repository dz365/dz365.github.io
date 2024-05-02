window.addEventListener("DOMContentLoaded", function () {
  function makeElementDraggable(windowElement, titlebar) {
    let offsetX, offsetY;

    function onMouseDown(event) {
      offsetX = event.clientX - windowElement.getBoundingClientRect().left;
      offsetY = event.clientY - windowElement.getBoundingClientRect().top;
      const iframe = windowElement.querySelector("iframe");
      if (iframe) iframe.style.pointerEvents = "none";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event) {
      let newX = event.clientX - offsetX;
      let newY = event.clientY - offsetY;

      if (newY < 0) newY = 0;
      if (newY > window.innerHeight - 20) newY = window.innerHeight - 20;
      if (newX > window.innerWidth - 20) newX = window.innerWidth - 20;

      windowElement.style.left = newX + "px";
      windowElement.style.top = newY + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      const iframe = windowElement.querySelector("iframe");
      if (iframe) iframe.style.pointerEvents = "auto";
    }

    titlebar.addEventListener("mousedown", onMouseDown);
  }

  const draggableElements = document.querySelectorAll(".draggable");
  draggableElements.forEach((element) =>
    makeElementDraggable(element, element)
  );

  // Make the entire finder draggable when the titlebar is dragged
  const finder = document.getElementById("finder");

  // Initially center finder to middle of screen
  const finderWidth = 768;
  const finderHeight = 384;
  const leftPosition = (window.innerWidth - finderWidth) / 2;
  const topPosition = (window.innerHeight - finderHeight) / 4;
  finder.style.left = leftPosition + "px";
  finder.style.top = topPosition + "px";

  const finderTitlebar = document.querySelectorAll(".finder-titlebar");
  finderTitlebar.forEach((titlebar) => makeElementDraggable(finder, titlebar));

  const windows = document.querySelectorAll(".window");
  windows.forEach((window) => {
    const titlebar = window.querySelector(".window-titlebar");
    makeElementDraggable(window, titlebar);
  });

  const windowActions = document.querySelector(".window-actions");

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

  const desktopIcons = [
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/dz365/",
    },
    {
      id: "github",
      url: "https://github.com/dz365",
    },
  ];
  desktopIcons.forEach((icon) => {
    document
      .getElementById(icon.id)
      .addEventListener("dblclick", () => window.open(icon.url, "_blank"));
  });
});
