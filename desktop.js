window.addEventListener("DOMContentLoaded", function () {
  function makeElementDraggable(element) {
    let offsetX, offsetY;

    function onMouseDown(event) {
      offsetX = event.clientX - element.getBoundingClientRect().left;
      offsetY = event.clientY - element.getBoundingClientRect().top;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event) {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      element.style.left = newX + "px";
      element.style.top = newY + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    element.addEventListener("mousedown", onMouseDown);
  }

  const draggableElements = document.querySelectorAll(".draggable");
  draggableElements.forEach((element) => makeElementDraggable(element));

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
  finderTitlebar.forEach(() => makeElementDraggable(finder));

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
