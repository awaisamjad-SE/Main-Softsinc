import img1 from '../assets/Images/image.png'; // John Doe
import img2 from '../assets/Images/background2.jpg'; 

const teamData = [
  {
    id: "john-doe",
    name: "John Doe",
    role: "Frontend Developer",
    image: img1,
    bio: "Expert in React, Tailwind, and UI/UX design.",
    skills: ["React", "JavaScript", "CSS", "Figma"],
    category: "development"
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    role: "Backend Developer",
    image: "/images/jane.jpg",
    bio: "Specializes in Node.js, databases, and RESTful APIs.",
    skills: ["Node.js", "MongoDB", "Express"],
    category: "development"
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    role: "Full Stack Developer",
    image: "/images/michael.jpg",
    bio: "Handles frontend and backend integration with React and Django.",
    skills: ["React", "Django", "PostgreSQL", "Docker"],
    category: "development"
  },
  {
    id: "sarah-lee",
    name: "Sarah Lee",
    role: "UI/UX Designer",
    image: "/images/sarah.jpg",
    bio: "Designs clean and user-friendly interfaces for web and mobile.",
    skills: ["Figma", "Adobe XD", "HTML", "CSS"],
    category: "development"
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "DevOps Engineer",
    image: "/images/david.jpg",
    bio: "Builds CI/CD pipelines and manages cloud deployments.",
    skills: ["AWS", "Jenkins", "Docker", "Kubernetes"],
    category: "development"
  },
  {
    id: "emma-james",
    name: "Emma James",
    role: "Project Manager",
    image: "/images/emma.jpg",
    bio: "Ensures timely delivery, task coordination, and team support.",
    skills: ["Agile", "Scrum", "JIRA", "Communication"]
    // No category → not part of development team
  },
  {
    id: "alexander-thomas",
    name: "Alexander Thomas",
    role: "Chief Executive Officer (CEO)",
    image: "/images/ceo.jpg",
    bio: "Leads the company's vision and long-term strategic direction.",
    skills: ["Leadership", "Business Strategy", "Investor Relations"]
  },
  {
    id: "natalie-roberts",
    name: "Natalie Roberts",
    role: "Chief Technology Officer (CTO)",
    image: "/images/cto.jpg",
    bio: "Oversees all technology initiatives and product architecture.",
    skills: ["System Design", "Tech Strategy", "Cloud Infrastructure"]
  },
  {
    id: "brian-cooper",
    name: "Brian Cooper",
    role: "Chief Operating Officer (COO)",
    image: "/images/coo.jpg",
    bio: "Manages daily operations and cross-team coordination.",
    skills: ["Operations", "Management", "Process Optimization"]
  },
  {
    id: "lucy-taylor",
    name: "Lucy Taylor",
    role: "Chief Marketing Officer (CMO)",
    image: "/images/cmo.jpg",
    bio: "Drives marketing strategy, branding, and customer engagement.",
    skills: ["SEO", "Digital Marketing", "Content Strategy"]
  }
];

export default teamData;
