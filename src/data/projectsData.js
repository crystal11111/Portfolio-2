// Project images
import projImg1 from "../assets/img/SS505.jpeg";
import projImg2 from "../assets/img/app-demo.png";
import projImg3 from "../assets/img/project-organization.png";
import projImg4 from "../assets/img/cpr_project.jpg";
import tedx from "../assets/img/TedX.png";
import blueprint from "../assets/img/blueprint.png";
import spear from "../assets/img/spear.png";
import gamedev from "../assets/img/Game_project.png";
import dbms_project from "../assets/img/dbms_project.png";
import qrapp from "../assets/img/301app.png";
import slide_hacked from "../assets/img/slide_hacked.png";
import morganstanley from "../assets/img/morganstanley.png";
import cpr from "../assets/img/cpr.png";
import codetogive from "../assets/img/IMG_6343.jpg";
import notion from "../assets/img/notionhackathon.png";
import aws from "../assets/img/aws.png";
import uofa from "../assets/img/U-Alberta.png";
import tmic from "../assets/img/TMIC.png";

export const projectsData = {
  workExperience: [
    {
      title: "Software Developer Intern",
      description: "AWS Payment Programs 💳 \n\n (May 2025 - Aug 2025)\n\n - Design and implement a data validation pipeline to detect and resolve inconsistencies between Elasticsearch and DynamoDB records.",
      imgUrl: aws, 
      linkUrl: "https://aws.amazon.com/",
    },
    {
      title: "Teaching Assistant",
      description: "CMPUT 301 - Software Engineering 👩🏻‍💻\n\n (Sep 2024 - Dec 2024)",
      imgUrl: uofa, 
      linkUrl: "https://www.ualberta.ca/",
    },
    {
      title: "Research Assistant",
      description: "GOLLM 🧬 \n\n (Jan 2025 - Apr 2025, Sep 2025 - Present)\n\n - Design a pipeline to identify proteins and extract Gene Ontology terms from PubMed literature using an LLM, demonstrating its potential to replace human annotators by evaluating model performance.",
      imgUrl: tmic, 
      linkUrl: "https://www.metabolomicscentre.ca/",
    },
  ],
  
  clubs: [
    {
      title: "Speaker Liaison",
      description: "TEDxUAlberta",
      imgUrl: tedx,
      linkUrl: "https://tedxualberta.ca/",
    },
    {
      title: "Product Designer",
      description: "Blueprint UofA Chapter",
      imgUrl: blueprint,
      linkUrl: "https://uofa-blueprint.notion.site/Overview-of-Roles-b451d443aa104153910d5cd02ab5b98d",
    },
    {
      title: "Software Member - Sensory Integration",
      description: "SPEAR (Space Exploration Alberta Robotics)",
      imgUrl: spear,
      linkUrl: "https://www.spaceualberta.ca/",
    },
  ],
  
  personal: [
    {
      title: "Seoul Women Tech Hackathon",
      description: "App Development & Design",
      imgUrl: projImg1,
      linkUrl: "https://github.com/crystal11111/SS505",
    },
    {
      title: "Demonstration Video",
      description: "Developed & Designed rewards system and safety resources page",
      imgUrl: projImg2,
      linkUrl: "https://www.youtube.com/watch?v=ppH2RVpqGBA",
    },
    {
      title: "Project Organization",
      description: "How we organized our project",
      imgUrl: projImg3,
      linkUrl: "https://docs.google.com/document/d/1GBis0i9fKuhcSfBoViEXF8PpGma_pQtqecefyGGgWuM/edit?usp=sharing",
    },
    {
      title: "HackED Beta 2023",
      description: "CPR Tutorial website",
      imgUrl: projImg4,
      linkUrl: "https://github.com/HackEDBetaTeam2023/CPR_Tutorial_HackED_Beta",
    },
    {
      title: "HackED Website",
      description: "Our website",
      imgUrl: cpr,
    },
    {
      title: "Presentation",
      description: "Our final presentation",
      imgUrl: slide_hacked,
      linkUrl: "https://docs.google.com/presentation/d/1JlyydFMKoTvPRhHU-154pJmeqRa90JmyH901LC64uJM/edit?usp=sharing",
    },
    {
      title: "Morgan Stanley Hackathon Code To Give 2024",
      description: "Web app for non-profit organization, Le Chaînon.",
      imgUrl: codetogive,
      linkUrl: "https://github.com/CodeToGive-2024-Team6/CodeToGive-2024",
    },
    {
      title: "Morgan Stanley Website",
      description: "Only frontend. If you want to see backend, check and follow the GitHub repository.",
      imgUrl: morganstanley,
      linkUrl: "https://codetogive6.web.app/",
    },
    {
      title: "Notion",
      description: "How we organized our project",
      imgUrl: notion,
      linkUrl: "https://www.notion.so/Code-to-Give-2024-d8b26926d73e4dcd8bc06ccba8fda163?pvs=4",
    },
    {
      title: "Game development",
      description: "Created simple game for fun using Unity and C#.",
      imgUrl: gamedev,
      linkUrl: "https://github.com/crystal11111/Flying-Bird",
    },
    {
      title: "DBMS (Database Management System)",
      description: "Created DBMS for school project using MongoDB, NoSQL, and Python.",
      imgUrl: dbms_project,
      linkUrl: "https://drive.google.com/file/d/1wm_aCQeFoBxIWOTVqVJky575PaVmOGUz/view?usp=sharing",
    },
    {
      title: "QR Scanner App",
      description: "Creating an event management system using Java and Firebase.",
      imgUrl: qrapp,
      linkUrl: "https://github.com/CMPUT301W24T07/Quick-scanneR",
    }
  ]
};

export const tabsConfig = [
  { key: "first", label: "Work Experience", dataKey: "workExperience" },
  { key: "second", label: "Club Activities", dataKey: "clubs" },
  { key: "third", label: "Projects", dataKey: "personal" }
];