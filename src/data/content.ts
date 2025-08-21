// src/data/content.ts
import nodejsIcon from "../assets/tools/nodejs.svg";
import expressIcon from "../assets/tools/express.svg";
import reactIcon from "../assets/tools/react.svg";
import reduxIcon from "../assets/tools/redux.svg";
import typescriptIcon from "../assets/tools/typescript.svg";
import javascriptIcon from "../assets/tools/javascript.svg";
import javaIcon from "../assets/tools/java.svg";
import pythonIcon from "../assets/tools/python.svg";
import mongodbIcon from "../assets/tools/mongodb.svg";
import mysqlIcon from "../assets/tools/mysql.svg";
import postgresqlIcon from "../assets/tools/postgresql.svg";
import influxdbIcon from "../assets/tools/influxdb.svg";
import feathersIcon from "../assets/tools/feathersjs.svg";
import janusgraphIcon from "../assets/tools/janusgraph.png";
import awsIcon from "../assets/tools/aws.svg";
import gcpIcon from "../assets/tools/gcp.svg";
import dockerIcon from "../assets/tools/docker.svg";
import kubernetesIcon from "../assets/tools/kubernetes.svg"
import websocketIcon from "../assets/tools/websockets.svg";
import mqttIcon from "../assets/tools/mqtt.png";
import natsIcon from "../assets/tools/nats.svg";
import nifiIcon from "../assets/tools/apache-nifi.svg";
import restApiIcon from "../assets/tools/restful_apis.png";
import jwtIcon from "../assets/tools/jwt.svg";
import postmanIcon from "../assets/tools/postman.svg";
import microservicesIcon from "../assets/tools/microservices.png";
import gitIcon from "../assets/tools/git.svg";
import githubIcon from "../assets/social/github.svg";
import gitlabIcon from "../assets/tools/gitlab.svg";
import chatgptIcon from "../assets/tools/chatgpt.svg";
import geminiIcon from "../assets/tools/google_gemini.svg";
import claudeIcon from "../assets/tools/claude_ai.png";
import copilotIcon from "../assets/tools/github-copilot.svg";
import cursorIcon from "../assets/tools/cursor.svg";
import linkedinIcon from "../assets/social/linkedin.svg";
import gmailIcon from "../assets/social/gmail.svg";


// 👤 Home Section
export const HERO_CONTENT = {
  name: "Ramees A R",
  role: "Software Engineer | Node.js • MongoDB • React.js • Java • Python",
  tagline: "I am a Software Development Engineer with over 4 years of experience in building scalable web applications and data-driven solutions. I have designed and implemented 40+ RESTful APIs, developed secure authentication systems, and created custom data flow processors to optimize real-time pipelines. My expertise includes Node.js, JavaScript, MongoDB, MySQL, and JanusGraph, with a strong focus on delivering efficient, secure, and maintainable solutions. I am passionate about applying technology to solve real-world challenges while continuously learning and enhancing my skill set to create impactful results.",
  cta: {
    resumeText: "Download Resume",
  },
};

// 💼 Experience Section
export const EXPERIENCES = [
  {
    company: "Toobler Technologies",
    role: "Software Development Engineer 1",
    duration: "Mar 2021 – Present",
    responsibilities: [
      "Designed and implemented 40+ RESTful APIs in Node.js for seamless integration with third-party services and internal modules.",
      "Integrated JWT-based authentication and authorization, protecting data access for 5,000+ users.",
      "Engineered a Node.js web scraper for 3,000+ restaurants, increasing data coverage and accuracy by 40%.",
      "Built 5+ custom Apache NiFi processors to optimize real-time data pipelines and simplify maintenance.",
      "Leveraged MongoDB, MySQL, and JanusGraph to handle structured and graph data for IoT and analytics platforms.",
      "Implemented WebSocket modules for live IoT updates, reducing latency by 30% across critical endpoints.",
      "Actively contributed to sprints, reviews, and code reviews; awarded Creative Visionary Award 2024.",
    ],
  },
];

// 🧩 Categorized Tools (for grouped rendering)
export const TOOL_SECTIONS = [
  {
    title: "Languages",
    items: [
      { name: "Java", iconUrl: javaIcon },
      { name: "Python", iconUrl: pythonIcon },
      { name: "TypeScript", iconUrl: typescriptIcon },
      { name: "JavaScript (ES6+)", iconUrl: javascriptIcon }
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", iconUrl: reactIcon },
      { name: "Redux", iconUrl: reduxIcon },
      { name: "Node.js", iconUrl: nodejsIcon },
      { name: "Express.js", iconUrl: expressIcon },
      { name: "Feathers.js", iconUrl: feathersIcon }
    ]
  },
  {
    title: "Databases & Graph",
    items: [
      { name: "MongoDB", iconUrl: mongodbIcon },
      { name: "MySQL", iconUrl: mysqlIcon },
      { name: "PostgreSQL", iconUrl: postgresqlIcon },
      { name: "InfluxDB", iconUrl: influxdbIcon },
      { name: "JanusGraph", iconUrl: janusgraphIcon }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", iconUrl: awsIcon },
      { name: "GCP", iconUrl: gcpIcon },
      { name: "Docker", iconUrl: dockerIcon },
      { name: "Kubernetes", iconUrl: kubernetesIcon }
    ]
  },
  {
    title: "Messaging & Real‑Time",
    items: [
      { name: "WebSockets", iconUrl: websocketIcon },
      { name: "MQTT", iconUrl: mqttIcon },
      { name: "Apache NiFi", iconUrl: nifiIcon },
      { name: "NATS", iconUrl: natsIcon }
    ]
  },
  {
    title: "APIs & Integrations",
    items: [
      { name: "RESTful APIs", iconUrl: restApiIcon },
      { name: "JWT Authentication", iconUrl: jwtIcon },
      { name: "Postman", iconUrl: postmanIcon },
      { name: "Microservices", iconUrl: microservicesIcon },
    ]
  },
  {
    title: "Version Control",
    items: [
      { name: "Git", iconUrl: gitIcon },
      { name: "GitHub", iconUrl: githubIcon },
      { name: "GitLab", iconUrl: gitlabIcon }
    ]
  },
  {
    title: "AI Chatbots",
    items: [
      { name: "ChatGPT", iconUrl: chatgptIcon },
      { name: "Google Gemini", iconUrl: geminiIcon },
      { name: "Claude AI", iconUrl: claudeIcon },
      { name: "Cursor", iconUrl: cursorIcon },
      { name: "GitHub Copilot", iconUrl: copilotIcon },
    ]
  }
];

// 📦 Projects
export const PERSONAL_PROJECTS = [
  {
    title: "Online Hospital Management System",
    description: "Django-based system enabling appointment scheduling, patient records, and admin control via a responsive web app.",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=60",
    tags: ["Django", "Python", "HTML", "CSS"],
    repoUrl: "https://github.com/Ramees12ar/Hospital-management-system-using-django-",
    liveUrl: "",
  },
  {
    title: "Portfolio Website",
    description: "Modern React portfolio built with Vite, Tailwind CSS, and shadcn/ui. Features glassmorphism design, 3D hover effects, and responsive layout showcasing skills and projects.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    repoUrl: "https://github.com/Ramees12ar/React-portfolio",
    liveUrl: "",
  },
];

export const OTHER_PROJECTS = [
  {
    title: "Digital Twin IoT Platform",
    description: "A web-based platform to monitor and manage IoT devices through digital twins, enabling real-time tracking and control of device operations. The system utilized PostgreSQL for structured data storage and JanusGraph for managing graph-based relationships between devices. Apache NiFi was implemented to orchestrate and optimize data flows, while NATS was integrated for efficient data publishing and subscription, ensuring seamless communication across the platform.",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=60",
    tags: ["Node.js", "Feathers.js", "Postgres", "JanusGraph", "WebSockets", "APIs", "Apache Nifi", "Nats"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    title: "Local Restaurant Discovery & Marketplace",
    description: "A web-based digital dining platform designed to transform how users discover and order food by combining visual appeal with convenience. The system showcases professional photographs of each restaurant menu item. Users can search for dishes or cuisines and filter results based on dietary preferences such as vegan, gluten-free, or nut-free before placing delivery orders. Built with Ruby on Rails, the platform incorporates a custom web scraper developed using Playwright to gather restaurant details from Google searches by location and extract menu images from Instagram accounts. A verification UI ensures data accuracy before presenting the results to users in search.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=60",
    tags: ["Node.js", "Express.js", "Web Scraping", "Mysql", "AWS S3", "Playwright", "Ruby on Rails"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    title: "Web-Based IoT Platform",
    description: "An enterprise-grade, multi-tenant, and multi-site web platform built to manage large-scale lighting installations. The system converts each light point into a digital data point, enabling intelligent control, real-time monitoring, and value-added services over the lighting infrastructure. Backend APIs and secure authentication were implemented using Node.js and JWT, with MQTT and WebSockets facilitating device communication. A dynamic dashboard was also developed to provide seamless monitoring and management capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
    tags: ["Node.js", "Express.js", "Mongodb", "JWT", "MQTT", "APIs", "WebSockets", "AWS S3"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    title: "Google Analytics E‑commerce Tracker",
    description: "Serverless AWS Lambda to automate daily GA data extraction, tracking purchases and interactions across platforms.",
    imageUrl: "https://thedatascientist.com/wp-content/uploads/2023/11/data-visualization-3.png",
    tags: ["AWS Lambda", "Serverless", "Snowflakes", "APIs", "Google Analytics", "Google Tag Manager"],
    repoUrl: "",
    liveUrl: "",
  },
];

// 🎓 Education
export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "KMEA Engineering College, Edathala, KL, India",
    year: "2016 – 2020",
  },
  {
    degree: "Higher Secondary Education (Plus 2)",
    institution: "GVHSS Kalamassery, KL, India",
    year: "2014 – 2016",
  },
  {
    degree: "Secondary Education (SSLC)",
    institution: "HMT Edl. Soc. High School, Kalamassery, KL, India",
    year: "2013 – 2014",
  },
];

// 📄 Resume Link (Google Drive or any PDF link)
export const RESUME_LINK =
  "https://drive.google.com/file/d/1SeN6dfkGfnoXKIr9wq8WQLhU5fx5Aosv/view";

export const SOCIAL_LINKS = [
  { title: "@ramees-ar", url: "https://www.linkedin.com/in/ramees-ar/", iconUrl: linkedinIcon },
  { title: "@Ramees12ar", url: "https://github.com/Ramees12ar", iconUrl: githubIcon },
  { title: "ramees.ar04", url: "mailto:ramees.ar04@gmail.com", iconUrl: gmailIcon },
];

export const AWARDS = [
  {
    title: "Creative Visionary Award",
    organization: "Toobler Technologies",
    date: "Feb 2024",
    description:
      "Recognized for innovative contributions to project planning and problem-solving across multiple platforms.",
  },
];

