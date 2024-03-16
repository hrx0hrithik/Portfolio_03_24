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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

const projects = [
    {
      name: "Hotel Room Booking",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "vanilla_js",
          color: "blue-text-gradient",
        },
        {
          name: "webApi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
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
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  ];

export { technologies, experiences, projects };