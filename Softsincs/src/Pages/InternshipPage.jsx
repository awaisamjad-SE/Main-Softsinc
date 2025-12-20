// src/pages/InternshipPage.jsx
import React from "react";
import SEO from '../components/common/SEO';
import Hero2 from "../components/sections/Hero2";
import InternshipSection from "../components/sections/InternshipSection";
import Faq from "../components/sections/Faq";
import internshipFaqs from "../data/internshipFaqs"; // you'll create this
import bgInternship from "../assets/Images/background.jpg"; // your own background image

const InternshipPage = () => {
  return (
    <>
      <SEO 
        title="Internship Programs - Softsincs | Start Your Tech Career"
        description="Launch your career in software development with Softsincs internship programs. Gain hands-on experience, work on real projects, and learn from industry experts."
        keywords="software internship, tech internship, developer training, intern positions, career start, software development internship"
        url="https://softsincs.com/internships"
      />
      <Hero2
        smallTitle="Internships"
        title="Launch Your Career with Us"
        description="Explore exciting internship opportunities and grow with real-world experience."
        backgroundImage={bgInternship}
        buttonText="Browse Internships"
        buttonLink="#internships"
      />

      <div id="internships">
        <InternshipSection />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20" id="faq">
        <h2 className="text-3xl font-extrabold text-indigo-900 mb-8 text-center">
          Internship FAQs
        </h2>
        <Faq faqs={internshipFaqs} />
      </section>
    </>
  );
};

export default InternshipPage;
