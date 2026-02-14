import { aiSaas, jobit, carHub, ecomm, jira } from "../assets";

export const PROJECTS = [
  {
    name: "E-Commerce Shop",
    description:
      // "This project is a full-featured e-commerce solution consisting of a desktop admin panel for managing shop operations and a mobile app for customer interactions. The admin panel allows employees to manage products, categories, orders, and users. The customer-facing mobile app provides a seamless shopping experience where users can search products, filter by categories, make purchases, and track their orders in real-time. The project is powered by a backend built with Express.js, ensuring fast and secure API communication between the front-end and the server. The system handles user authentication, order management, and inventory updates, providing a complete end-to-end solution for online shopping businesses.",
      "Full-featured e-commerce solution consisting of a desktop admin panel for managing shop operations and a mobile app for customer interactions.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/organroman/fullstack-ecom",
    production_link: "https://fullstack-ecom-dashboard.vercel.app/",
  },
  {
    name: "Taskify",
    description:
      "Application for managing tasks via creating projects, workspaces, managing members, assignees. The tasks has 3 views - table, kanban with drag and drop and calendar.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "appwriter",
        color: "green-text-gradient",
      },
      {
        name: "hono",
        color: "pink-text-gradient",
      },
    ],
    image: jira,
    source_code_link: "https://github.com/organroman/jira-clone",
    production_link: "https://jira-clone-lac.vercel.app/",
  },
  {
    name: "Job IT",
    description:
      "Simple Mobile application that enables users to search for job openings, review job description, requirements and responsibilities.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/organroman/react_native_jobs",
    production_link: "https://ro-job-search.vercel.app/",
  },
  {
    name: "Rent a car",
    description:
      "A simple carHub booking platform that allows users to review the list of cars and car details, to search, filter cars by make and model, year and fuel type.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carHub,
    source_code_link: "https://github.com/organroman/rent-a-car",
    production_link: "https://ro-rent-a-car.vercel.app/",
  },
  {
    name: "AI Sass",
    description:
      "Web-based AI-sass platform with five AI tools that allows users to generate music, images, video, code and conversation using AI tools by making a prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiSaas,
    source_code_link: "https://github.com/organroman/ai-saas",
    production_link: "https://ro-ai-saas.vercel.app",
  },
];
