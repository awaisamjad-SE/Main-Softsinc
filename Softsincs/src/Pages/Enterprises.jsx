import React from "react";
import Hero2 from "../Components/layout/Hero2";
import bgEnterprises from "../assets/Images/background.jpg"; // ✅ Make sure this image exists
import Services from "../Components/layout/hero/Services"; // Optional: reuse with filtered enterprise services
import TechStackSection from "../Components/layout/hero/TechStackSection";
import ContactSection from "../Components/layout/hero/ContactSection";

const EnterprisesPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Hero2
        smallTitle="Enterprise Solutions"
        title="Empowering Enterprises with Scalable Digital Solutions"
        description="From process automation to AI and cloud infrastructure, we help enterprises modernize and scale with confidence."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundImage={bgEnterprises}
      />

      {/* Why Enterprises Trust Us */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#2e35d7] mb-10">
          Why Enterprises Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "fas fa-cloud", title: "Cloud & Infrastructure" },
            { icon: "fas fa-network-wired", title: "System Integration" },
            { icon: "fas fa-lock", title: "Enterprise Security" },
            { icon: "fas fa-cogs", title: "Process Automation" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 text-center shadow rounded">
              <i className={`${item.icon} text-3xl text-[#2e35d7] mb-3`}></i>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services (filtered if needed) */}
      <Services />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default EnterprisesPage;
