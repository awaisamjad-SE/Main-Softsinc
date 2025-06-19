import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaCode,            // <-- Add this line
  // ...other icons
} from "react-icons/fa";

import { 
  SiDjango, 
  SiLaravel, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiFlutter,
  // other Si icons
} from "react-icons/si";

const techdata = [
  {
    category: "Frontend",
    items: [
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3Alt, label: "CSS" },
      { icon: FaJs, label: "JavaScript" },
      { icon: FaReact, label: "React" },
      // add more frontend tech here...
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: FaNodeJs, label: "Node.js" },
      { icon: SiDjango, label: "Django" },
      { icon: SiLaravel, label: "Laravel" },
      { icon: SiExpress, label: "Express.js" },
      // more backend tech...
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: FaDatabase, label: "SQL / MySQL" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiFirebase, label: "Firebase" },
      // more db tech...
    ],
  },
  {
    category: "Mobile",
    items: [
      { icon: SiFlutter, label: "Flutter" },
      { icon: FaReact, label: "React Native" }, 
      // more mobile tech...
    ],
  },
  {
    category: "DevOps & Hosting",
    items: [
      { icon: FaDocker, label: "Docker" },
      // AWS, Vercel, Netlify (you can add custom icons or text here)
    ],
  },
  {
    category: "CMS & eCommerce",
    items: [
      { icon: FaCode, label: "WordPress" },
      // WooCommerce, Shopify, etc.
    ],
  },
];

export default techdata;
