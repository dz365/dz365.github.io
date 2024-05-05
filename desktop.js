window.addEventListener("DOMContentLoaded", function () {
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
