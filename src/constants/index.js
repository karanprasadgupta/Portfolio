import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  WhatsApp_Chat_Analyzer,
  CampusCravings,
  cred_scrore_ml,
  OLX_ER,
  threejs,
  willHero,
  Asm_Sim,
  HCIDesign,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Databse Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    x:"-42vw", y:"-2vh"
  },
  {
    name: "CSS 3",
    icon: css,
    x:"10vw", y:"-18vh"
  },
  {
    name: "JavaScript",
    icon: javascript,
    x:"20vw", y:"12vh"
  },

  {
    name: "React JS",
    icon: reactjs,
    x:"0vw", y:"0vh"
  },
  {
    name: "Node JS",
    icon: nodejs,
    x:"-27vw", y:"15vh"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    x:"-17vw", y:"-8vh"
  },
  {
    name: "git",
    icon: git,
    x:"35vw", y:"-13vh"
  },
  {
    name: "figma",
    icon: figma,
    x:"42vw", y:"16vh"
  },

];

const projects = [
  {
    name: "WhatsApp Chat Analyzer",
    description:
      "WhatsApp Chat Analyzer is a tool built using python to help you gain valuable insights from your WhatsApp chats. It provides various functionalities to analyze and visualize data extracted from the chat exports. This tool allows you to explore patterns, trends, and statistics related to your conversations.",
    tags: [
      {
        name: "Machine-Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: WhatsApp_Chat_Analyzer,
    source_code_link: "https://github.com/karanprasadgupta/WhatsAppChatAnalzyer/",
  },
  {
    name: "Campus Cravings",
    description:
      "CampusCravings is an Android app that revolutionizes food ordering at the canteen. With just a few taps on their phones, customers can effortlessly order their favorite meals, eliminating long lines and menu searches. Enjoy efficient and convenient canteen orders with the power of CampusCravings.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material.io",
        color: "pink-text-gradient",
      },
    ],
    image: CampusCravings,
    source_code_link: "https://github.com/karanprasadgupta/Campus_Cravings-Android_App",
  },
  {
    name: "Credit Score Classifier",
    description:
      "The Credit Score Classification Using Machine Learning project aims to develop machine learning models to predict credit scores accurately. The project leverages a Kaggle dataset of historical credit information and uses various machine learning algorithms to build predictive models.",
    tags: [
      {
        name: "Machine-Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: cred_scrore_ml,
    source_code_link: "https://github.com/karanprasadgupta/Credit-Score-Classification-Using-ML",
  },
  {
    name: "Olx Databse Clone",
    description:
      "It provides a detailed database schema and entity-relationship (ER) model for a clone of the OLX platform. It focuses on the design and structure of the database used by OLX, a popular online classifieds marketplace. It uses a PHP based web app for Demonstration of database and sql queries. ",
    tags: [
      {
        name: "Dbms",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: OLX_ER,
    source_code_link: "https://github.com/karanprasadgupta/OLX_Database_Clone/",
  },
  {
    name: "Will Hero Game",
    description:
      "Adaptation of the popular game Will Hero by ZPlay. The game showcases the application of OOPs principles and leverages the JavaFX framework to deliver stunning graphics and smooth controls. Embark on an adventurous journey, navigate through obstacles and enjoy the game.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "OOPS",
        color: "pink-text-gradient",
      },
    ],
    image: willHero,
    source_code_link: "https://github.com/karanprasadgupta/Will-Hero",
  },
  {
    name: "Assembler & Simulator",
    description:
      "The project involves developing an Assembler to convert assembly language code into machine code and a Simulator to execute the resulting code. It enables observation of proper instruction execution and combines the functionalities of code conversion and execution emulation.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Shell",
        color: "pink-text-gradient",
      },
    ],
    image: Asm_Sim,
    source_code_link: "https://github.com/karanprasadgupta/Assembler-and-Simulator",
  },
  {
    name: "GoCabs",
    description:
      "The purpose of this project is to provide an unified solution “Gocabs” application which integrates the existing applications and provides a detailed comparison between the various options.thus enabling the user’s control over his/her decision rather than the service provider’s.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UI-Design",
        color: "green-text-gradient",
      },
    ],
    image: HCIDesign,
    source_code_link: "https://github.com/karanprasadgupta/",
  },
  
];

export { services, technologies, projects };
