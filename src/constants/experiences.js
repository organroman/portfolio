import { logoDan, logoColorDan, shortWhiteDan, jewelWaxLight } from "../assets";
import { COLORS } from "./colors";

export const EXPERIENCES = [
  {
    title: "Fullstack Developer",
    company_name: "Jewel Wax",
    web: "https://jewel-wax.com.ua",
    icon: jewelWaxLight,
    iconBg: COLORS.cumberlandSausage,
    date: "May 2025 - Present",
    points: [
      "Custom CRM-ERP for Jewelry Manufacturing—end-to-end build (architecture → deploy).",
      "Designed, implemented, and launched a production CRM-ERP that streamlines orders, communication, and fulfillment across the shop floor.",
      "Architecture & Backend: Node.js + TypeScript (Express, Knex) with layered controllers/services/models. PostgreSQL schema for persons, requests, orders, deliveries, chat, finances.",
      "Frontend: Next.js + React (TS), React Hook Form + Zod, shadcn/ui DataTable; real-time chat and status updates via socket.io.",
      "Orders & Messaging: Full order lifecycle (modeling → milling → 3D printing → delivery) with activity/audit timeline. Telegram integration over WebSockets; channel-adapter layer to add Messenger/Instagram/WhatsApp without touching core domain logic. Internal chat for communication between users(admin - order performers) inside one order.",
      "Business Features: RBAC, internal chat, activity logs, and finance/operations dashboards.",
      "Integrations: Cloudinary for media, DigitalOcean Spaces for files, Nova Poshta API for delivery declarations.",
      "DevOps: Automated deploy scripts, PM2 + Nginx, PostgreSQL migrations; DigitalOcean hosting with separate test & prod subdomains.",
      "Security & Compliance: JWT refresh flow, secure password reset, rate limiting, audit logs, GDPR-ready roles/permissions model.",
      "Impact: Reduced manual ops via automated order tracking & delivery workflows, unified client comms around orders, and created a scalable foundation for multi-channel CRM/ERP extensions.]",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "DAN.IT Systems",
    web: "https://dan-it.com/",
    icon: shortWhiteDan,
    iconBg: COLORS.moodIndigo,
    date: "Apr 2023 - Present",
    points: [
      "As the sole frontend developer in a small team, I am responsible for developing the frontend of an integrated ERP, CRM, and LMS system for educational businesses. This system manages processes from lead generation to student graduation. I work closely with a backend developer, designer, and product owner to deliver features efficiently, with code reviews by our full stack system architect.",
      `Tech Stack
React.js | Material-UI (MUI) | React Router | Redux Toolkit | Axios | Sentry React`,
      `Key Features
  * Authentication & Authorization
    - Role-Based Auth: Users can have multiple roles with access to specific pages, data, and CRUD operations.
    - Permissions Table: Manages entity access based on roles.
Internationalization. Multi-Language Localization: Using React i18n.
Data Visualization. Charts: Dashboards using Recharts.
UI Enhancements
Drag and Drop: Implemented with dnd-kit.
Calendars: MUI date-time pickers and BigCalendar for event management.
Text Editing. Rich Text Editor: Using React-Quill for article formatting.
Data Handling
Search: Server-side and client-side search with filtering and sorting.
File Management: File upload/download.
Data Export: Export selected data.
Contract Generation: Export contracts as Word documents using docx library.
Complex Forms:   Developed various forms with fields ranging from simple strings to arrays of dates or files. Utilized Formik for form management and Yup for validation.
`,
      `Summary
I have independently developed a wide range of frontend features for an integrated ERP, CRM, and LMS system, ensuring close collaboration with team members and maintaining high code quality through regular reviews.`,
    ],
  },
  {
    title: "Trainer FrontEnd",
    company_name: "DAN.IT Education",
    web: "https://dan-it.com.ua",
    icon: logoColorDan,
    iconBg: COLORS.cumberlandSausage,
    date: "Jan 2025 - present",
    points: [
      "Design and deliver hands-on Frontend training",
      "Turn theory into labs and real briefs, lead live-coding sessions, and coach problem-solving.",
      "Review student work with clear rubrics, provide practical feedback, and guide learners to ship production-grade projects.",
    ],
  },
  {
    title: "Mentor FrontEnd",
    company_name: "DAN.IT Education",
    web: "https://dan-it.com.ua/",
    icon: logoDan,
    iconBg: COLORS.moodIndigo,
    date: "Sep 2022 - Dec 2024",
    points: [
      "Support students with their educational process.",
      "Evaluation their homeworks and step projects",
      "Code review and provide a feedback",
      "Answer the questions and assistance with problems solving",
    ],
  },
];
