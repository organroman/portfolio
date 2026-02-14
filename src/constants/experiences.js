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
      // "Architecture & Backend: Node.js + TypeScript (Express, Knex) with layered controllers/services/models. PostgreSQL schema for persons, requests, orders, deliveries, chat, finances.",
      // "Frontend: Next.js + React (TS), React Hook Form + Zod, shadcn/ui DataTable; real-time chat and status updates via socket.io.",
      // "Orders & Messaging: Full order lifecycle (modeling → milling → 3D printing → delivery) with activity/audit timeline. Telegram integration over WebSockets; channel-adapter layer to add Messenger/Instagram/WhatsApp without touching core domain logic.",
      // "Business Features: RBAC, internal chat, activity logs, and finance/operations dashboards.",
      // "Integrations: Cloudinary for media, DigitalOcean Spaces for files, Nova Poshta API for delivery declarations.",
      // "DevOps: Automated deploy scripts, PM2 + Nginx, PostgreSQL migrations; DigitalOcean hosting with separate test & prod subdomains.",
      // "Security & Compliance: JWT refresh flow, secure password reset, rate limiting, audit logs, GDPR-ready roles/permissions model.",
      "Impact: Reduced manual ops via automated order tracking & delivery workflows, unified client comms around orders, and created a scalable foundation for multi-channel CRM/ERP extensions.]",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "DAN Systems",
    web: "https://dan-it.com/",
    icon: shortWhiteDan,
    iconBg: COLORS.moodIndigo,
    date: "Apr 2023 - Present",
    points: [
      "Integrated ERP-CRM-LMS for Education — end-to-end frontend build (wireframes → prod).",
      "Designed, implemented, and shipped the production frontend that powers the whole learner journey (lead → enrollment → study → graduation) and internal ops. Solo FE in a lean squad; shipped fast with clean PRs and architect reviews.",
      // Frontend & Architecture: React.js + Material UI, React Router, Redux Toolkit (state/data), Axios for API, Sentry (error tracking). Component-driven, reusable UI kits, sensible foldering, and predictable state flows.
      // Auth & Access: Multi-role RBAC with page/data/CRUD gates. Centralized permissions matrix to map entities → actions per role.
      // Localization: Full i18n with language switcher (React i18next). Copy keys, fallbacks, and RTL-safe layouts ready.
      // Data Viz & Dashboards: Recharts-based widgets for KPIs and progress; responsive cards, empty states, and loading skeletons.
      // Scheduling & Events: MUI pickers + BigCalendar for classes, intakes, and sessions; timezone-safe and keyboard-accessible.
      // UX Enhancers: dnd-kit drag/drop (lists, ordering), React-Quill rich text for articles and lessons, sticky toolbars, autosave hooks.
      // Search & Tables: Server/client-side search, filtering, sorting, pagination. Bulk actions and row-level ops with optimistic UI.
      // Files & Docs: Upload/download flows with validation and progress. Contract generation via docx (Word export) with templating.
      // Forms & Validation: Formik + Yup across simple to nested arrays (dates/files). Reusable field components and error surfacing.
      // Reliability: Centralized API layer (Axios interceptors), toastable errors, guarded routes, and Sentry breadcrumbs for triage.
      // Ways of Working: Tight loop with BE, designer, PO; design handoff → dev → review → release. Reviews by full-stack architect for quality and maintainability.
      "Impact: Cut manual admin via role-aware flows, sped up content & scheduling, localized the app for wider reach, and automated contract/exports — turning a scattered toolset into one clean, scalable frontend foundation.]",
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
