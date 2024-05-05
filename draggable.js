function makeElementDraggable(windowElement, draggableElem) {
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

  draggableElem.addEventListener("mousedown", onMouseDown);
}
