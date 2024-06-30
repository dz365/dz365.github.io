const events = [
  {
    type: "project",
    title: "Asteroids",
  },
  {
    type: "work",
    title: "Skatescribe",
  },
  {
    type: "work",
    title: "Caseware",
  },
  {
    type: "project",
    title: "Ecosquad",
  },
  {
    type: "work",
    title: "SDDH",
  },
];

const workDescriptions = {
  SDDH: {
    company: "Service Delivery Data Hub Project",
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
      "Flask",
      "SocketIO",
      "PostgreSQL",
      "Electron",
    ],
  },
};

const projectDescriptions = {
  Ecosquad: {
    name: "Ecosquad",
    overview: "A citizen scientist web app",
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
    overview: "A remake of the classic Altari game",
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
  email: "dwqz365@gmail.com",
  summary:
    "I'm Daniel Zhang, a Computer Science graduate from the \
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

function generateWorkInfo(workName) {
  const workInfo = workDescriptions[workName];
  return `
    <div class="main-info">
      <span class="title">${workInfo.company}</span>
      <span class="position">${workInfo.position}</span>
      <span class="date">${workInfo.date}</span>
    </div>
    <div class="extra-info">
      <span class="description">${workInfo.description}</span>
      ${generateTechListHTML(workInfo.technologies)}
    </div>
  `;
}

function generateProjectInfo(projectName) {
  const projectInfo = projectDescriptions[projectName];
  return `
    <div class="main-info">
      <span class="title">${projectInfo.name}</span>
      <span class="overview">${projectInfo.overview}</span>
      <a href=${projectInfo.link} target="_blank" class="subtitle">
        ${projectInfo.link}
      </a>
    </div>
    <div class="extra-info">
      <span class="description">${projectInfo.description}</span>
      ${generateTechListHTML(projectInfo.technologies)}
    </div>
  `;
}

function updateInfoBodyWithAbout() {
  document.querySelector(".info-body .content").innerHTML = `
    <span class="title">About Me</span>
    <span class="greeting">Hey there! Thanks for visiting.</span>
    <span>${aboutMe.summary}</span>
    <span>${generateContactListHTML(aboutMe.contact)}</span>
    <p style="color:red;">
      NOTE: This site still being updated! Check back weekly for the latest changes.
    </p>
  `;
}

function setConnectorHeight() {
  const timelineEvents = document.querySelectorAll(".event");
  const firstEvent = timelineEvents[0];
  const lastEvent = timelineEvents[timelineEvents.length - 1];
  const timelineRect = document
    .querySelector(".timeline")
    .getBoundingClientRect();

  // Calculate positions
  const topPosition =
    firstEvent.getBoundingClientRect().top - timelineRect.top + window.scrollY;
  const bottomPosition =
    lastEvent.getBoundingClientRect().bottom -
    timelineRect.top +
    window.scrollY;

  const connector = document.querySelector(".connector");
  connector.style.top = `${topPosition}px`;
  connector.style.height = `${bottomPosition - topPosition}px`;
}

window.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");

  events.forEach((event) => {
    const eventInfo = document.createElement("div");
    eventInfo.classList.add("event-info", "collapsed", event.type);
    if (event.type === "work")
      eventInfo.innerHTML = generateWorkInfo(event.title);
    else if (event.type === "project")
      eventInfo.innerHTML = generateProjectInfo(event.title);

    eventInfo.addEventListener("click", () => {
      const extraInfo = eventInfo.querySelector(".extra-info");
      if (extraInfo.style.maxHeight) {
        extraInfo.style.maxHeight = null;
      } else {
        extraInfo.style.maxHeight = extraInfo.scrollHeight + "px";
      }
      setConnectorHeight(); // Call this function if it adjusts the layout
    });

    timeline.prepend(eventInfo);

    const eventElem = document.createElement("div");
    eventElem.classList.add(event.type, "icon", "event");
    timeline.prepend(eventElem);
  });

  const timelineEvents = document.querySelectorAll(".event");

  if (timelineEvents.length > 0) {
    setConnectorHeight();
  }
});
