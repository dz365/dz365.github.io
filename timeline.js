window.addEventListener("DOMContentLoaded", function () {
  function connectElements() {
    const events = document.querySelectorAll('.event');

    for (let i = 0; i < events.length - 1; i++) {
      let startPoint = getCenter(events[i]);
      let endPoint = getCenter(events[i + 1]);
      if (startPoint.x > endPoint.x && startPoint.y < endPoint.y) {
        [startPoint, endPoint] = [endPoint, startPoint];
      }

      const distance = Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y);
      const angle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);

      const line = document.createElement("div");
      line.classList.add("connector")
      line.style.left = startPoint.x + "px";
      line.style.top = startPoint.y + "px";
      line.style.width = distance + "px";
      line.style.transform = `rotate(${angle}rad)`;
      
      document.querySelector('.timeline').appendChild(line);
    }
  }

  function getCenter(element) {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
  connectElements();
})