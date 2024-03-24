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
    GoYOLO,
    WindowsHome,
    PingpongGame,
  } from "../assets";


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
      name: "git",
      icon: git,
    },
    {
      name: "Next js",
      icon: nextjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];

const experiences = [
    {
      title: "Node.js Developer",
      company_name: "Celebal Technologies",
      icon: celebal,
      iconBg: "#fefefe",
      date: "May 2023 - July 2023",
      points: [
        "Traning on Backend Development in NodeJS.",
        "HandsOn practice with fs and multer for file handaling",
        "Individual Full-stack projects on MERN stack.",
        "Project :- Hotel Booking System",
      ],
    },
  ];

const projects = [
    {
      name: "Hotel Room Booking",
      description:
        "A Full stack MERN project for hotel room booking system, make it in summer internship.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: GoYOLO,
      source_code_link: "https://github.com/hrx0hrithik/MERN-Hotel-Booking",
      hosted_site_link: "https://fastidious-melba-8feb05.netlify.app/",
    },
    {
      name: "Windows 11 Clone",
      description:
        "A attempt to make Windows 11 fully working clone, with plane Vanilla JS and CSS.",
      tags: [
        {
          name: "vanilla_js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: WindowsHome,
      source_code_link: "https://github.com/hrx0hrithik/Windows_11_Homescreen",
      hosted_site_link: "https://hrithik-windows11.netlify.app/",
    },
    {
      name: "Ping Pong game",
      description:
        "A attempt to make a game using Vanilla JS only, building game logic.",
      tags: [
        {
          name: "vanilla_js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: PingpongGame,
      source_code_link: "https://github.com/hrx0hrithik/game-pingpong",
      hosted_site_link: "https://bejewelled-zabaione-97d09c.netlify.app/",
    },
    {
      name: "Personal Portfolio",
      description:
        "Portfolio project made using React, Tailwind and using Three JS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three-js",
          color: "pink-text-gradient",
        },
      ],
      image: PingpongGame,
      source_code_link: "https://github.com/hrx0hrithik/Portfolio_03_24",
      hosted_site_link: "#",
    },
  ];

export { technologies, experiences, projects };