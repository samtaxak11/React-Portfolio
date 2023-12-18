import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: creator,
    },
  ];
  
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Content Writing Intern",
      company_name: "EDigital Marketing",
      icon: web,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "I write and format articles on Wordpress.",
        "I also leverage AI Technology to create high-quality content with human touch.",
        "This internship has provided me with valuable experience in AI-assisted content creation and enhanced my proficiency in using Wordpress interface.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Oasis Infobyte",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        "Developed a Full Stack Pizza Delivering app with full functionalities.",
        "Honed up my skills in Web Development, Web Designing and Project Management.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Code Alpha",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "August 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "During my web development internship at Code Alpha, I honed my web development skills, especially in the MERN Stack",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Additionally, I completed various tasks throughout the internship period.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const achievement = [
    {
      name: "Software Engineering Virtual Experience",
      company: "JP Morgan Chase & Co.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Web Applications",
          color: "green-text-gradient",
        },
        {
          name: "Financial Data",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
    },
    {
      name: "Data Science Job Simulation",
      company: "British Airways",
        tags: [
          {
            name: "Web Scraping to gain company insights",
            color: "blue-text-gradient",
          },
          {
            name: "Predicting customer buying behavior",
            color: "green-text-gradient",
          },
        ],
      image: carrent,
    },
    {
      name: "Power BI Virtual Case Experience",
      company: "PwC Switzerland", 
        tags: [
          {
            name: "Power BI",
            color: "blue-text-gradient",
          },
          {
            name: "Data Visualization",
            color: "green-text-gradient",
          },
          {
            name: "Analytical problem-solving",
            color: "pink-text-gradient",
          },
        ],
      image: carrent,
    },
  ];
  
  export { services, technologies, experiences, achievement, projects };