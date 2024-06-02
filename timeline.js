const events = [
  {
    type: "project",
    title: "Asteroids",
    class: ["asteroids"],
  },
  {
    type: "work",
    title: "Skatescribe",
    class: ["skatescribe"],
  },
  {
    type: "work",
    title: "Caseware",
    class: ["caseware"],
  },
  {
    type: "project",
    title: "Ecosquad",
    class: ["ecosquad"],
  },
  {
    type: "work",
    title: "SDDH",
    class: ["sddh"],
  },
  {
    type: "about",
    title: "About Me",
    class: ["home"],
  },
];

const workDescriptions = {
  SDDH: {
    company: "Service Delivery Data Hub Project",
    link: "https://scarboroughlip.com/current-projects/service-delivery-data-hub-project/",
    position: "Full Stack Developer (Work Learning Experience)",
    date: "November 2023",
    description:
      "My recent work was on the Service Delivery Data Hub project, a collaboration between \
       various services and organizations in Toronto. The project \
       aims to improve the settlement experiences of newcomers in Scarborough by providing \
       evidence for better service delivery and planning. When I joined, essential functionalities \
       were complete, and new features were being developed to improve the analysis. My role involved integrating end-to-end \
       tests into the build pipeline to ensure that new features did not disrupt existing functionality.",
    technologies: ["Cypress", "JavaScript"],
  },
  Caseware: {
    company: "Caseware International",
    link: "https://www.caseware.com/",
    position: "Software Developer Intern",
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
    link: "https://www.skatescribe.com/",
    position: "Full Stack Developer Intern",
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

const aboutMe = {
  name: "Daniel Zhang",
  email: "dwqz365@gmail.com",
  summary:
    "I'm Daniel Zhang, a 4th year Computer Science student at the \
     University of Toronto. My dream is to work on something that everyone can appreciate. Hasn't \
     happened yet, but I'm slowly getting there through all the experiences I've gained from various \
     courses I've taken throughout my degree and my amazing internship experiences.",
  contact: [
    {
      platform: "Email",
      link: "mailto:dwqz365@gmail.com",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/dz365/",
    },
    {
      platform: "Github",
      link: "https://github.com/dz365",
    },
    {
      platform: "Resume",
      link: "https://dz365.github.io/Daniel_Zhang_Resume.pdf",
    },
  ],
};

function generateTechListHTML(techList) {
  let listHTML = '<div class="list">';
  techList.forEach((tech) => {
    listHTML += `<span class="tech-item">${tech}</span>`;
  });
  listHTML += "</div>";
  return listHTML;
}

function generateContactListHTML(contactList) {
  let listHTML = '<div class="list">';
  contactList.forEach((contact) => {
    listHTML += `
      <a href=${
        contact.link
      } rel="noreferrer" target="_blank" class="contact-item">
        <div class="icon contact ${contact.platform.toLowerCase()}"></div>
        <span>${contact.platform}</span>
      </a>`;
  });
  listHTML += "</div>";
  return listHTML;
}

function updateInfoBodyWithWork(workName) {
  const workInfo = workDescriptions[workName];
  const infoBody = document.querySelector(".info-body");
  infoBody.innerHTML = `
    <a href=${workInfo.link} target="_blank" class="title-link">
      <span class="title">${workInfo.company}</span>
      <div class="icon link"></div>
    </a>
    <span class="position">${workInfo.position}</span>
    <span class="date">${workInfo.date}</span>
    <span class="description">${workInfo.description}</span>
    ${generateTechListHTML(workInfo.technologies)}
  `;
  infoBody.className = "info-body";
  infoBody.classList.add("work");
}

function updateInfoBodyWithProject(projectName) {
  const projectInfo = projectDescriptions[projectName];
  const infoBody = document.querySelector(".info-body");
  infoBody.innerHTML = `
    <a href=${projectInfo.link} target="_blank" class="title-link">
      <span class="title">${projectInfo.name}</span>
      <div class="icon link"></div>
    </a>
    <span class="description">${projectInfo.description}</span>
    ${generateTechListHTML(projectInfo.technologies)}
  `;
  infoBody.className = "info-body";
  infoBody.classList.add("project");
}

function updateInfoBodyWithAbout() {
  const infoBody = document.querySelector(".info-body");
  infoBody.innerHTML = `
    <span class="title">${aboutMe.name}</span>
    <span class="greeting">Hey there! Thanks for visiting.</span>
    <span>${aboutMe.summary}</span>
    <span>${generateContactListHTML(aboutMe.contact)}</span>
  `;
  infoBody.className = "info-body";
  infoBody.classList.add("about");
}

function updateInfoBody(eventTitle, eventType) {
  document.querySelector(".info-body").scrollTop = 0;
  if (eventType === "work") updateInfoBodyWithWork(eventTitle);
  else if (eventType === "project") updateInfoBodyWithProject(eventTitle);
  else if (eventType === "about") updateInfoBodyWithAbout();
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

  document.querySelector(".connector").style.width = "100%";
  timeline.style.transform = `translateX(-${timeline.scrollWidth}px)`;
  updateInfoBodyWithAbout();

  function getCenter(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    return {
      x: rect.left + scrollLeft + rect.width / 2,
      y: rect.top + scrollTop + rect.height / 2,
    };
  }

  function dispatchPositionChangeEvent() {
    const event = new CustomEvent("positionChange");
    const events = document.querySelectorAll(".event");
    events.forEach((eventElem) => eventElem.dispatchEvent(event));
  }

  let currentScrollPosition = timeline.scrollWidth;
  document.addEventListener("wheel", (e) => {
    if (document.querySelector(".info-body").contains(e.target)) return;
    currentScrollPosition += Math.sign(e.deltaY) * 100;
    if (currentScrollPosition < 0) currentScrollPosition = 0;
    if (currentScrollPosition > timeline.scrollWidth)
      currentScrollPosition -= 100;
    timeline.style.transform = `translateX(-${currentScrollPosition}px)`;
    dispatchPositionChangeEvent();
  });
});
