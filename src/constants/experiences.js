import { logoDan, contractLogo } from "../assets";
import { COLORS } from "./colors";

export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "NDA, contract",
    icon: contractLogo,
    iconBg: COLORS.cumberlandSausage,
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining EdTech web applications (ERP, LMS, CRM combined in one ecosystem) using React.js and other related technologies.",
      "Collaborating with cross-functional team including designer, product manager, and BackEnd developer to create high-quality products.",
    ],
  },
  {
    title: "FrontEnd Mentor",
    company_name: "DAN.IT",
    icon: logoDan,
    iconBg: COLORS.moodIndigo,
    date: "Sep 2022 - Present",
    points: [
      "Support students with their educational process.",
      "Evaluation their homeworks and step projects",
      "Code review and provide a feedback",
      "Answer the questions and assistance with problems solving",
    ],
  },
];
