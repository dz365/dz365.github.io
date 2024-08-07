const events = [
  {
    type: "work",
    title: "SDDH",
  },
  {
    type: "project",
    title: "Ecosquad",
  },
  {
    type: "work",
    title: "Caseware",
  },
  {
    type: "work",
    title: "Skatescribe",
  },
  {
    type: "project",
    title: "Asteroids",
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
    date: "February 2023 - April 2023",
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
    date: "April 2019 - June 2019",
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
  summary:
    "I'm Daniel Zhang, a Computer Science graduate from the \
     University of Toronto. My dream is to work on something that everyone can appreciate. Hasn't \
     happened yet, but with each day, I'm getting closer.",
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
      <span class="date">${workInfo.date}</span>
      <span class="title">${workInfo.company}</span>
      <span class="position">${workInfo.position}</span>
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
      <span class="date">${projectInfo.date}</span>
      <span class="title">${projectInfo.name}</span>
      <span class="overview">${projectInfo.overview}</span>
    </div>
    <div class="extra-info">
      <a href=${projectInfo.link} target="_blank" class="project-link">
        ${projectInfo.link}
      </a>
      <span class="description">${projectInfo.description}</span>
      ${generateTechListHTML(projectInfo.technologies)}
    </div>
  `;
}

function generateAbout() {
  return `
    <span class="greeting">Hey there!</span>
    <span>${aboutMe.summary}</span>
    <span>${generateContactListHTML(aboutMe.contact)}</span>
    <p style="color:red;">
      NOTE: This site still being updated! Check back weekly for the latest changes.
    </p>
  `;
}

window.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");

  events.forEach((event) => {
    const eventElem = document.createElement("div");
    eventElem.classList.add(event.type, "icon", "event");
    timeline.appendChild(eventElem);

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
    });

    timeline.appendChild(eventInfo);
  });

  const eventElem = document.createElement("div");
  eventElem.classList.add("icon", "event");
  eventElem.style.marginTop = 0;
  timeline.appendChild(eventElem);
  const eventInfo = document.createElement("div");
  eventInfo.innerHTML =
    "<span style='color:#697375;padding-left:16px;'>No previous history</span>";
  timeline.appendChild(eventInfo);

  // Set connector height
  const children = timeline.children;
  const lastEvent = children[children.length - 2];
  const lastEventBottom = lastEvent.getBoundingClientRect().bottom;

  const lastEventInfo = children[children.length - 1];
  const lastEventInfoBottom = lastEventInfo.getBoundingClientRect().bottom;

  document.querySelector(".connector").style.height = `calc(100% - ${
    lastEventInfoBottom - lastEventBottom + 33
  }px)`;

  const about = this.document.createElement("div");
  about.classList.add("event-info", "main-info", "about-info");
  about.innerHTML = generateAbout();
  this.document.body.prepend(about);
});
