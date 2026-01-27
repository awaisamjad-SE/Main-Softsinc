import React from "react";
import SEO from '../components/common/SEO';
import Hero2 from "../components/sections/Hero2";
import bg1 from "../assets/Images/background.jpg"; // Use your startup hero bg
import Services from "../components/sections/Services"; // Reuse for startup-focused services if needed
import TechStackSection from "../components/sections/TechStackSection";
import ContactSection from "../components/sections/ContactSection";

// Optional: Create a new section component like StartupProcessSection, IndustriesWeServe, etc.

const StartupPage = () => {
  return (
    <div>
      <SEO 
        title="Startup Solutions - Softsincs | MVP Development & Growth Strategy"
        description="Transform your startup idea into reality with Softsincs. We provide MVP development, product strategy, and scalable solutions to help startups succeed and grow."
        keywords="startup software development, MVP development, startup solutions, product development, startup technology, lean startup, agile development"
        url="https://softsincs.com/startups"
      />
      {/* Hero Banner */}
      <Hero2
        smallTitle="Startup Launch & Growth"
        title="Helping Startups Succeed From Idea to Launch"
        description="We empower entrepreneurs with the right tools, strategy, and technology to bring their vision to life."
        buttonText="Get Started Today"
        buttonLink="/contact"
        backgroundImage={bgStartup}
      />

      {/* Optional: Why Startups Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#2e35d7]">Why Startups Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "fas fa-rocket", title: "Quick MVP Delivery" },
            { icon: "fas fa-lightbulb", title: "Idea to Product Strategy" },
            { icon: "fas fa-tools", title: "Full-Stack Development" },
            { icon: "fas fa-chart-line", title: "Launch & Scale" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white shadow rounded text-center">
              <i className={`${item.icon} text-3xl text-[#2e35d7] mb-3`}></i>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services (Tailored for Startups if needed) */}
      <Services />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
};

export default StartupPage;
