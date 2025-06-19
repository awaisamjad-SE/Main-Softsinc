// src/pages/InternshipPage.jsx
import React from "react";
import Hero2 from "../Components/layout/Hero2";
import InternshipSection from "../Components/layout/InternshipSection";
import Faq from "../Components/layout/hero/Faq";
import internshipFaqs from "../data/internshipFaqs"; // you'll create this
import bgInternship from "../assets/Images/background.jpg"; // your own background image

const InternshipPage = () => {
  return (
    <>
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
