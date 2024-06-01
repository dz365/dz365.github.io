const events = [
  {
    type: "work",
    title: "Service Delivery Data Hub Project",
    class: ["sddh"],
  },
  {
    type: "project",
    title: "Ecosquad",
    class: ["ecosquad"],
  },
  {
    type: "work",
    title: "Caseware",
    class: ["caseware"],
  },
  {
    type: "work",
    title: "Skatescribe",
    class: ["skatescribe"],
  },
  {
    type: "project",
    title: "Asteroids",
    class: ["asteroids"],
  },
];
window.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");

  events.forEach((event) => {
    const eventElem = document.createElement("div");
    eventElem.classList.add(event.class, event.type, "icon", "event");

    eventElem.addEventListener("positionChange", () => {
      if (Math.abs(getCenter(eventElem).x - window.innerWidth / 2) < 100)
        document.querySelector(".info-body").innerHTML = event.title;
    });

    timeline.appendChild(eventElem);
  });

  function connectElements() {
    const events = document.querySelectorAll(".event");
    const startPoint = getCenter(events[0]);
    const endPoint = getCenter(events[events.length - 1]);
    const distance = Math.hypot(
      endPoint.x - startPoint.x,
      endPoint.y - startPoint.y
    );
    const connector = document.createElement("div");
    connector.classList.add("connector");
    connector.style.width = distance + "px";
    connector.style.left = startPoint.x + "px";
    connector.style.top = startPoint.y + "px";
    timeline.appendChild(connector);
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

  function dispatchPositionChangeEvent() {
    const event = new CustomEvent("positionChange", {
      detail: { message: "Position has changed!" },
    });
    const events = document.querySelectorAll(".event");
    events.forEach((eventElem) => eventElem.dispatchEvent(event));
  }

  let currentScrollPosition = 0;
  document.addEventListener("wheel", (e) => {
    currentScrollPosition += Math.sign(e.deltaY) * 100;
    if (currentScrollPosition < 0) currentScrollPosition = 0;
    if (currentScrollPosition + window.innerWidth / 2 > timeline.scrollWidth)
      currentScrollPosition -= 100;
    timeline.style.transform = `translateX(-${currentScrollPosition}px)`;
    dispatchPositionChangeEvent();
  });
});
