import bg1 from '../assets/Images/background.jpg';
import bg2 from '../assets/Images/background2.jpg';
import bg3 from '../assets/Images/background.jpg';
import bg4 from '../assets/Images/background.jpg';
import bg5 from '../assets/Images/background2.jpg';

const servicesData = [
  {
    title: "AI Development",
    tag: "Hot",
    link: "/services/ai",
    slug: "ai",
    bgImage: bg1,
    description: "We build cutting-edge AI solutions.",
    summary: "Harness the power of artificial intelligence to automate, predict, and evolve your business processes.",
    benefits: [
      "Improved decision-making",
      "Enhanced automation",
      "Personalized user experiences",
      "Data-driven insights"
    ],
    features: [
      { icon: "fas fa-brain", label: "Machine Learning Models" },
      { icon: "fas fa-robot", label: "AI Chatbots" },
      { icon: "fas fa-chart-line", label: "Predictive Analytics" }
    ],
    process: ["Requirement Analysis", "Model Design", "Training & Testing", "Deployment", "Support"],
    cta: "Contact us to build your AI solution."
  },
  {
    title: "Web Design",
    tag: "New",
    link: "/services/web",
    slug: "web",
    bgImage: bg2,
    description: "Beautiful and responsive web design.",
    summary: "Create stunning websites that are fast, responsive, and user-friendly.",
    benefits: [
      "Modern aesthetics",
      "Mobile responsiveness",
      "SEO optimization",
      "User-centered design"
    ],
    features: [
      { icon: "fas fa-laptop-code", label: "Responsive Layouts" },
      { icon: "fas fa-palette", label: "Creative Design" },
      { icon: "fas fa-bolt", label: "Performance Optimized" }
    ],
    process: ["Design Briefing", "Wireframing", "Prototyping", "Development", "Launch"],
    cta: "Let’s build your online presence."
  },
  {
    title: "Mobile Apps",
    tag: "Featured",
    link: "/services/mobile",
    slug: "mobile",
    bgImage: bg3,
    description: "Custom mobile applications for iOS and Android.",
    summary: "We create intuitive and feature-rich mobile applications.",
    benefits: [
      "Cross-platform support",
      "Intuitive UI/UX",
      "App store deployment",
      "Push notifications"
    ],
    features: [
      { icon: "fas fa-mobile-alt", label: "iOS & Android" },
      { icon: "fas fa-layer-group", label: "React Native / Flutter" },
      { icon: "fas fa-bell", label: "Push Notifications" }
    ],
    process: ["Ideation", "Design & Development", "Testing", "Launch", "Post-launch Support"],
    cta: "Launch your mobile app with us."
  },
  {
    title: "Cloud Services",
    tag: "Cloud",
    link: "/services/cloud",
    slug: "cloud",
    bgImage: bg4,
    description: "Secure and scalable cloud services.",
    summary: "Scale your infrastructure with our cloud solutions.",
    benefits: [
      "Scalability",
      "Reduced costs",
      "Global access",
      "Reliable uptime"
    ],
    features: [
      { icon: "fas fa-cloud", label: "Cloud Hosting" },
      { icon: "fas fa-database", label: "Data Backup" },
      { icon: "fas fa-network-wired", label: "Network Infrastructure" }
    ],
    process: ["Consultation", "Migration Plan", "Deployment", "Monitoring", "Maintenance"],
    cta: "Move to the cloud with confidence."
  },
  {
    title: "Cyber Security",
    tag: "Secure",
    link: "/services/security",
    slug: "security",
    bgImage: bg5,
    description: "Protect your business with our security solutions.",
    summary: "Safeguard your systems, data, and reputation with top-notch security.",
    benefits: [
      "Threat detection",
      "Compliance assistance",
      "24/7 monitoring",
      "Data protection"
    ],
    features: [
      { icon: "fas fa-shield-alt", label: "Firewall Setup" },
      { icon: "fas fa-user-secret", label: "Penetration Testing" },
      { icon: "fas fa-lock", label: "Data Encryption" }
    ],
    process: ["Risk Assessment", "Security Planning", "Implementation", "Testing", "Monitoring"],
    cta: "Secure your digital environment today."
  }
];

export default servicesData;
