const events = [
  {
    type: "work",
    title: "SDDH",
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

const workDescriptions = {
  SDDH: {
    company: "Service Delivery Data Hub Project",
    position: "Full Stack Developer (Work Learning Experience)",
    date: "November 2023",
    description:
      "My recent work was on the Service Delivery Data Hub project, a collaboration between \
       Catholic Crosscultural Services (CCS), the University of Toronto Scarborough (UTSC), \
       and the Toronto East Quadrant Local Immigration Partnership (TEQ LIP). The project \
       aims to improve the settlement experiences of newcomers in Scarborough by providing \
       evidence for better service delivery and planning. When I joined, essential functionalities \
       were complete, and new features were being developed. My role involved integrating end-to-end \
       tests into the build pipeline to ensure that new features did not disrupt existing functionality.",
    technologies: ["Cypress", "JavaScript"],
  },
  Caseware: {
    company: "Caseware International",
    position: "Software Developer",
    date: "January 2022 - August 2022",
    description:
      "My second internship was for 8 months at a medium sized auditing company called Caseware. \
       At the time I was working, Caseware was in a transitional stage to fully move all their \
       products to cloud providers. As such, most of what I worked on were related to this. Some \
       of the major things I did include development of a routing microservice to handle incoming \
       requests, and system improvements to better support client needs.",
    technologies: ["Java", "Spring Boot", "AWS", "DynamoDB", "Redis", "C++"],
  },
  Skatescribe: {
    company: "Skatescribe",
    position: "Full Stack Developer",
    date: "May 2021 - August 2021",
    description:
      "My first internship was for 4 months at a startup called Skatescribe. Backed by NHL investors, \
       they are revolutionizing the skate sharpening industry by using machines, leading to high quality \
       cuts that cannot be replicated anywhere else. What I worked on during my time here was developing \
       measures to improve operational safety and automation to reduce the amount of interaction an \
       operator has with the software.",
    technologies: [
      "Angular",
      "Python",
      "Python Flask",
      "SocketIO",
      "PostgreSQL",
      "Electron",
    ],
  },
};

const projectDescriptions = {
  Ecosquad: {
    name: "Ecosquad",
    link: "https://github.com/dz365/project-ecosquad",
    description:
      "Ecosquad is a web app developed by me and a friend of mine. The inspiration behind it was \
       that we wanted a place where we could upload wildlife discoveries that we would make from \
       time to time. Hence we made a citizen scientist app where users could share, search, and \
       view discoveries on an interactive map.",
    technologies: [
      "React",
      "MapLibre GL",
      "ExpressJS",
      "PostgreSQL",
      "Meilisearch",
      "Docker",
    ],
  },
  Asteroids: {
    name: "Asteroids Remake",
    link: "https://github.com/dz365/Asteroid-Remake",
    description:
      "This was a project that I did along with a friend quite a while back, but I had so much \
       fun creating that I decided to include it here. It's also nice to be reminded of how far \
       I've come in such a short period of time. As per the name, this was a remake of Asteroids \
       by Altari, alongisde additional features like powerups.",
    technologies: ["Java", "Java Swing"],
  },
};

function updateInfoBodyWithWork(workName) {
  const workInfo = workDescriptions[workName];
  document.querySelector(".info-body").innerHTML = `
    <p>${workInfo.company}</p>
    <p>${workInfo.position}</p>
    <p>${workInfo.date}</p>
    <p>${workInfo.description}</p>
    <p>${workInfo.technologies}</p>
  `;
}

function updateInfoBodyWithProject(projectName) {
  const projectInfo = projectDescriptions[projectName];
  document.querySelector(".info-body").innerHTML = `
    <p>${projectInfo.name}</p>
    <p>${projectInfo.link}</p>
    <p>${projectInfo.description}</p>
    <p>${projectInfo.technologies}</p>
  `;
}

function updateInfoBody(eventTitle, eventType) {
  if (eventType === "work") updateInfoBodyWithWork(eventTitle);
  else if (eventType === "project") updateInfoBodyWithProject(eventTitle);
}

window.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");

  events.forEach((event) => {
    const eventElem = document.createElement("div");
    eventElem.classList.add(event.class, event.type, "icon", "event");

    eventElem.addEventListener("positionChange", () => {
      if (Math.abs(getCenter(eventElem).x - window.innerWidth / 2) < 100)
        updateInfoBody(event.title, event.type);
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
