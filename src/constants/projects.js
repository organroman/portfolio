import { aiSaas, jobit, tripguide } from "../assets";

export const PROJECTS = [
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
