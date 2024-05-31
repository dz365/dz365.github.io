window.addEventListener("DOMContentLoaded", function () {
  function connectElements() {
    const events = document.querySelectorAll(".event");
    const startPoint = getCenter(events[0]);
    const endPoint = getCenter(events[events.length - 1]);
    const distance = Math.hypot(
      endPoint.x - startPoint.x,
      endPoint.y - startPoint.y
    );
    const connector = document.querySelector(".connector")
    connector.style.width = distance + "px";
    connector.style.left = startPoint.x + "px";
    connector.style.top = startPoint.y + "px";
  }

  function getCenter(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    return {
      x: rect.left + scrollLeft + rect.width / 2,
      y: rect.top + scrollTop + rect.height / 2,
    };
  }

  connectElements();
  let currentScrollPosition = 0;

  const timeline = document.querySelector(".timeline");
  document.addEventListener("wheel", (e) => {
    currentScrollPosition += e.deltaY;

    if (currentScrollPosition < 0) currentScrollPosition = 0;

    if (
      currentScrollPosition >
      timeline.scrollWidth - (3 * timeline.clientWidth) / 4
    )
      currentScrollPosition =
        timeline.scrollWidth - (3 * timeline.clientWidth) / 4;
    timeline.style.transform = `translateX(-${currentScrollPosition}px)`;
  });
});
