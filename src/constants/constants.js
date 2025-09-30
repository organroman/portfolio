import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mui,
  melnyk,
  gryntsiv,
  tanstack,
  nextjs,
  shadcn,
  express,
  zod,
  zustand,
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

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "next.js", icon: nextjs },
  { name: "Node JS", icon: nodejs },
  { name: "express", icon: express },
  { name: "Redux Toolkit", icon: redux },
  { name: zustand, icon: zustand },
  { name: "mui", icon: mui },
  { name: "shadcn", icon: shadcn },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "tanstack", icon: tanstack },
  { name: "zod", icon: zod },
  // { name: "MongoDB", icon: mongodb },
  // { name: "Three JS", icon: threejs },
  // { name: "git", icon: git },
  // { name: "figma", icon: figma },
  // {  name: "HTML 5", icon: html},
  // { name: "CSS 3", icon: css },
];

const testimonials = [
  {
    testimonial: `I worked with Roman on a CRM system project.
      As a client, I can say that during our collaboration, he demonstrated a high level of professionalism and deep domain knowledge, which enabled us to achieve our goals.
      I am completely satisfied with the work and the completed task.
      I can recommend Roman as a stable and reliable partner in solving problems.`,
    name: "Dmitriy Melnik",
    designation: "Founder and CEO",
    company: "Jewel Wax",
    image: melnyk,
  },
  {
    testimonial: `I had the pleasure of working with Roman on a CRM system project. He proved himself to be a highly skilled and reliable developer who consistently delivers tasks on time and with great attention to detail.
      Roman is easy to collaborate with – he is professional, proactive, and always open to discussing solutions. His contributions had a significant impact on the successful delivery of our project.
      I highly recommend Roman as a dependable developer and a valuable team player.`,
    name: "Nataliya Gryntsiv",
    designation: "UX Designer, Product Designer",
    company: "GRYNA",
    image: gryntsiv,
  },
];

export { technologies, testimonials };
