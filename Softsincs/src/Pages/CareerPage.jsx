// src/pages/CareerPage.jsx
import React from "react";
import SEO from '../Components/Common/SEO';
import Hero2 from "../components/sections/Hero2";
import CareerSection from "../components/sections/CareerSection";
import Faq from "../components/sections/Faq"; // Assuming reusable FAQ component
import careerFaqs from "../data/careerFaqs"; 
import bgCareer from "../assets/Images/background.jpg"; // Use any relevant background

const CareerPage = () => {
  return (
    <>
      <SEO 
        title="Careers - Softsincs | Join Our Innovative Team"
        description="Explore career opportunities at Softsincs. Join our team of talented developers and innovators. We offer competitive salaries, growth opportunities, and a collaborative environment."
        keywords="software development jobs, developer careers, tech jobs, employment opportunities, join our team, software engineer positions"
        url="https://softsincs.com/careers"
      />
      <Hero2
        smallTitle="Careers"
        title="Join Our Growing Team"
        description="Be a part of an innovative and collaborative environment. Explore our open roles and shape your future with us."
        backgroundImage={bgCareer}
        buttonText="Explore Jobs"
        buttonLink="#jobs"
      />

      <div id="jobs">
        <CareerSection />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20" id="faq">
        <h2 className="text-3xl font-extrabold text-indigo-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Faq faqs={careerFaqs} />
      </section>
    </>
  );
};

export default CareerPage;
