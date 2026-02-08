import React from "react";
import SEO from '../components/common/SEO';
import AnimatedBackground from '../components/common/AnimatedBackground';
import TechPageStack from "../components/sections/TechPageStack"; // adjust the path if needed
import Hero2 from "../components/sections/Hero2";
import imgtech from "../assets/Images/background.jpg";
import Faq from "../components/sections/Faq"; // Correct import name

const faqs = [
  {
    question: "What frontend technologies do you specialize in?",
    answer: "We primarily work with React, Vue, Tailwind CSS, and Bootstrap to build responsive and dynamic user interfaces."
  },
  {
    question: "Which backend frameworks do you use?",
    answer: "Our backend stack includes Node.js, Django, Express, and Laravel for robust and scalable server-side applications."
  },
  {
    question: "What databases are supported?",
    answer: "We work with a variety of databases such as MySQL, PostgreSQL, MongoDB, and Firebase to suit your data needs."
  },
  {
    question: "Do you offer mobile app development?",
    answer: "Yes, we develop cross-platform mobile apps using Flutter and React Native."
  },
  {
    question: "Which hosting and DevOps tools do you use?",
    answer: "We use Docker for containerization and deploy applications using AWS, Vercel, and Netlify for reliable hosting."
  }
];

const TechnologyPage = () => {
  return (
    <>
      <AnimatedBackground />
      <SEO 
        title="Technology Stack - Softsincs | Modern Development Tools & Frameworks"
        description="Discover the powerful technologies and frameworks we use at Softsincs including React, Node.js, Python, AI/ML tools, cloud platforms, and more to build cutting-edge software solutions."
        keywords="technology stack, React, Node.js, Python, Django, Flutter, React Native, AWS, cloud computing, AI development, modern frameworks"
        url="https://softsincs.com/technology"
      />
      <Hero2
        smallTitle="Technology"
        title="Our Cutting-Edge Tech Stack"
        description="Explore the key technologies that power our solutions and drive innovation."
        backgroundImage={imgtech}
        buttonText="Learn More"
        buttonLink="#tech-stack"
      />

      <TechPageStack />

      <section className="max-w-7xl mx-auto px-6 py-20" id="faq">
        <h2 className="text-3xl font-extrabold text-black mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Faq faqs={faqs} /> {/* ✅ Match import name */}
      </section>
    </>
  );
};

export default TechnologyPage;
