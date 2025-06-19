import React from "react";
import Hero2 from "../Components/layout/Hero2";
import bgStartup from "../assets/Images/background.jpg"; // ✅ Use your startup-related image
import Services from "../Components/layout/hero/Services"; // Reuse for startup-focused services if needed
import TechStackSection from "../Components/layout/hero/TechStackSection";
import ContactSection from "../Components/layout/hero/ContactSection";

// Optional: Create a new section component like StartupProcessSection, IndustriesWeServe, etc.

const StartupPage = () => {
  return (
    <div>
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
