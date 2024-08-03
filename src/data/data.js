import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  cpp,
  celebal,
  anotech,
  GoYOLO,
  GoYOLO_mobile,
  WindowsHome,
  PingpongGame,
  PersonalPortfolio,
} from "../assets"

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "C++",
    icon: cpp,
  },
]

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Celebal Technologies",
    icon: celebal,
    date: "May 2023 - July 2023",
    points: [
      "Traning on Backend Development in NodeJS.",
      "HandsOn practice with fs and multer for file handaling",
      "Individual Full-stack projects on MERN stack.",
      "Project :- Hotel Booking System",
    ],
  },
  {
    title: "Fronted Developer",
    company_name: "Anotech India Solutions",
    date: "Aug 2024 - Present",
    icon: anotech,
    iconBg: "blue",
    points: ["Starting as React JS Developer"],
  },
]

const projects = [
  {
    name: "Hotel Room Booking",
    description:
      "My first full stack MERN project for hotel room booking system, made it in summer internship used JWT, bycrypt, PDFkit and RazorPay. ",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "express",
        color: "green-text",
      },
      {
        name: "mongodb",
        color: "pink-text",
      },
    ],
    image: GoYOLO,
    image2: GoYOLO_mobile,
    source_code_link: "https://github.com/hrx0hrithik/MERN-Hotel-Booking",
    hosted_site_link: "https://fastidious-melba-8feb05.netlify.app/",
  },
  {
    name: "Windows 11 Clone",
    description:
      "An attempt to make Windows 11 fully working clone, with plane Vanilla JS and CSS, I made a working calendar and Light & Dark mode. ",
    tags: [
      {
        name: "vanilla_js",
        color: "blue-text",
      },
      {
        name: "css",
        color: "green-text",
      },
      {
        name: "html",
        color: "pink-text",
      },
    ],
    image: WindowsHome,
    source_code_link: "https://github.com/hrx0hrithik/Windows_11_Homescreen",
    hosted_site_link: "https://hrithik-windows11.netlify.app/",
  },
  {
    name: "Ping Pong game",
    description:
      "An attempt to make a game using Vanilla JS only, building game logic, points count, pause and play.",
    tags: [
      {
        name: "vanilla_js",
        color: "blue-text",
      },
      {
        name: "html",
        color: "green-text",
      },
      {
        name: "css",
        color: "pink-text",
      },
    ],
    image: PingpongGame,
    source_code_link: "https://github.com/hrx0hrithik/game-pingpong",
    hosted_site_link: "https://bejewelled-zabaione-97d09c.netlify.app/",
  },
  {
    name: "Personal Portfolio",
    description: "Portfolio made using React, Tailwind and using Three JS. ",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "tailwind",
        color: "green-text",
      },
      {
        name: "three-js",
        color: "pink-text",
      },
    ],
    image: PersonalPortfolio,
    source_code_link: "https://github.com/hrx0hrithik/Portfolio_03_24",
    hosted_site_link: "#",
  },
]

export { technologies, experiences, projects }
