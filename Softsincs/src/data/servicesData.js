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
  title: "Digital Marketing",
  tag: "Trending",
  link: "/services/marketing",
  slug: "marketing",
  bgImage: bg1,
  description: "Grow your business with digital strategies.",
  summary: "Reach your target audience and boost your brand with data-driven digital marketing.",
  benefits: [
    "Increased online visibility",
    "Higher conversion rates",
    "Brand awareness",
    "Audience engagement"
  ],
  features: [
    { icon: "fas fa-bullhorn", label: "SEO & SEM" },
    { icon: "fas fa-envelope-open-text", label: "Email Marketing" },
    { icon: "fas fa-chart-pie", label: "Analytics & Reports" }
  ],
  process: ["Strategy Planning", "Campaign Setup", "Execution", "Tracking", "Optimization"],
  cta: "Boost your online presence today."
},
{
  title: "E-commerce Solutions",
  tag: "Popular",
  link: "/services/ecommerce",
  slug: "ecommerce",
  bgImage: bg2,
  description: "Launch your online store with powerful features.",
  summary: "We develop scalable and secure e-commerce platforms tailored to your business needs.",
  benefits: [
    "User-friendly shopping experience",
    "Secure payment gateways",
    "Inventory management",
    "Mobile optimization"
  ],
  features: [
    { icon: "fas fa-shopping-cart", label: "Online Storefronts" },
    { icon: "fas fa-credit-card", label: "Secure Payments" },
    { icon: "fas fa-boxes", label: "Product Management" }
  ],
  process: ["Requirement Gathering", "Platform Selection", "Development", "Launch", "Ongoing Support"],
  cta: "Start selling online today."
},
{
  title: "UI/UX Design",
  tag: "Creative",
  link: "/services/uiux",
  slug: "uiux",
  bgImage: bg3,
  description: "Engaging and intuitive user experiences.",
  summary: "We design beautiful interfaces that are both functional and user-focused.",
  benefits: [
    "Improved usability",
    "Stronger brand identity",
    "Higher retention",
    "Seamless interactions"
  ],
  features: [
    { icon: "fas fa-pencil-ruler", label: "Wireframes & Prototypes" },
    { icon: "fas fa-users", label: "User Research" },
    { icon: "fas fa-eye", label: "Visual Design" }
  ],
  process: ["Discovery", "User Research", "Design", "Feedback", "Final Handoff"],
  cta: "Let’s craft a great experience for your users."
},
{
  title: "DevOps & Automation",
  tag: "Efficient",
  link: "/services/devops",
  slug: "devops",
  bgImage: bg4,
  description: "Streamline your development and deployment processes.",
  summary: "Adopt DevOps practices to improve collaboration and automate workflows.",
  benefits: [
    "Faster deployments",
    "Improved collaboration",
    "Continuous integration",
    "Reduced downtime"
  ],
  features: [
    { icon: "fas fa-cogs", label: "CI/CD Pipelines" },
    { icon: "fas fa-sync-alt", label: "Automated Deployments" },
    { icon: "fas fa-server", label: "Infrastructure as Code" }
  ],
  process: ["Assessment", "Setup", "Implementation", "Monitoring", "Optimization"],
  cta: "Automate your development pipeline today."
},
{
  title: "Data Analytics",
  tag: "Insightful",
  link: "/services/data",
  slug: "data",
  bgImage: bg5,
  description: "Turn your data into actionable insights.",
  summary: "Leverage analytics to make smarter decisions and uncover hidden opportunities.",
  benefits: [
    "Data visualization",
    "Business intelligence",
    "Real-time reporting",
    "Predictive insights"
  ],
  features: [
    { icon: "fas fa-chart-bar", label: "Dashboards" },
    { icon: "fas fa-database", label: "Data Warehousing" },
    { icon: "fas fa-lightbulb", label: "Business Insights" }
  ],
  process: ["Data Collection", "Analysis", "Visualization", "Reporting", "Decision Making"],
  cta: "Unlock the power of your data."
},
{
  title: "Process Automation",
  tag: "Efficient",
  link: "/services/automation",
  slug: "automation",
  bgImage: bg1,
  description: "Automate repetitive tasks to save time and reduce errors.",
  summary: "We help businesses automate workflows using custom scripts, bots, and integrations.",
  benefits: [
    "Time-saving operations",
    "Error reduction",
    "Cost efficiency",
    "Improved productivity"
  ],
  features: [
    { icon: "fas fa-cogs", label: "Workflow Automation" },
    { icon: "fas fa-robot", label: "Robotic Process Automation (RPA)" },
    { icon: "fas fa-sync", label: "System Integrations" }
  ],
  process: ["Discovery", "Design", "Implementation", "Testing", "Monitoring"],
  cta: "Let’s automate your business processes."
},
{
  title: "Python Development",
  tag: "Core",
  link: "/services/python",
  slug: "python",
  bgImage: bg2,
  description: "Powerful backend development using Python.",
  summary: "From web apps to data science – we build scalable Python-based solutions.",
  benefits: [
    "Rapid development",
    "Clean and readable code",
    "Strong community support",
    "Versatile applications"
  ],
  features: [
    { icon: "fas fa-code", label: "Custom Scripts" },
    { icon: "fas fa-brain", label: "AI/ML Integration" },
    { icon: "fas fa-server", label: "Fast APIs with Django/Flask" }
  ],
  process: ["Requirement Gathering", "Development", "Testing", "Deployment", "Support"],
  cta: "Build with Python, build smarter."
},
{
  title: "Startup Launch Package",
  tag: "Starter Kit",
  link: "/services/startup",
  slug: "startup",
  bgImage: bg3,
  description: "Everything you need to launch your online startup.",
  summary: "From branding to deployment, we help you turn your idea into a real digital product.",
  benefits: [
    "Fast go-to-market",
    "Complete branding kit",
    "Website & app setup",
    "Ongoing support"
  ],
  features: [
    { icon: "fas fa-lightbulb", label: "Idea Validation" },
    { icon: "fas fa-rocket", label: "MVP Development" },
    { icon: "fas fa-globe", label: "Online Presence Setup" }
  ],
  process: ["Consultation", "Design & Development", "Branding", "Launch", "Growth Support"],
  cta: "Launch your startup with confidence."
},
{
  title: "Final Year Projects Consultation",
  tag: "Student Support",
  link: "/services/final-year",
  slug: "final-year",
  bgImage: bg4,
  description: "Helping students plan and build their final year projects.",
  summary: "We provide end-to-end guidance from project selection to development and documentation.",
  benefits: [
    "Project selection support",
    "Code implementation",
    "Report/documentation help",
    "Viva preparation"
  ],
  features: [
    { icon: "fas fa-book", label: "Project Ideas" },
    { icon: "fas fa-code-branch", label: "Coding Support" },
    { icon: "fas fa-file-alt", label: "Reports & Presentations" }
  ],
  process: ["Idea Discussion", "Proposal Draft", "Development Support", "Documentation", "Final Review"],
  cta: "Get expert help for your project journey."
},
{
  title: "Advanced E-commerce",
  tag: "Scalable",
  link: "/services/ecommerce-pro",
  slug: "ecommerce-pro",
  bgImage: bg5,
  description: "Scalable e-commerce platforms for growing businesses.",
  summary: "We go beyond basic online stores and build enterprise-grade solutions.",
  benefits: [
    "Inventory management",
    "Multi-vendor support",
    "Secure payment integration",
    "Order tracking"
  ],
  features: [
    { icon: "fas fa-store", label: "Custom Store Design" },
    { icon: "fas fa-credit-card", label: "Payment Gateways" },
    { icon: "fas fa-truck", label: "Order Fulfillment" }
  ],
  process: ["Discovery", "Platform Setup", "Integration", "Testing", "Launch"],
  cta: "Upgrade your online store today."
},
{
  title: "Blockchain Solutions",
  tag: "Decentralized",
  link: "/services/blockchain",
  slug: "blockchain",
  bgImage: bg1,
  description: "Build trust and transparency with blockchain.",
  summary: "We develop smart contracts, DApps, and blockchain-based solutions for businesses.",
  benefits: [
    "Data immutability",
    "Increased transparency",
    "Smart automation",
    "Decentralized systems"
  ],
  features: [
    { icon: "fas fa-link", label: "Smart Contracts" },
    { icon: "fas fa-cube", label: "Decentralized Apps" },
    { icon: "fas fa-chart-network", label: "Private/Public Blockchain" }
  ],
  process: ["Consulting", "Architecture Design", "Development", "Testing", "Deployment"],
  cta: "Get started with blockchain today."
},
{
  title: "Quality Assurance (QA)",
  tag: "QA",
  link: "/services/qa",
  slug: "qa",
  bgImage: bg2,
  description: "Ensure your product is bug-free and reliable.",
  summary: "We offer full-cycle testing services to help you deliver flawless digital products.",
  benefits: [
    "Bug-free deployment",
    "Enhanced user satisfaction",
    "Better performance",
    "Security assurance"
  ],
  features: [
    { icon: "fas fa-bug", label: "Manual Testing" },
    { icon: "fas fa-vial", label: "Automation Testing" },
    { icon: "fas fa-shield-check", label: "Security & Load Testing" }
  ],
  process: ["Planning", "Test Case Design", "Execution", "Reporting", "Maintenance"],
  cta: "Make quality your priority."
}
,
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
