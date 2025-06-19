import React from "react";
import Services from "../Components/layout/hero/Services";
import Hero2 from "../Components/layout/Hero2";
import bgServices from "../assets/Images/background.jpg"; // ✅ Use a relevant image
import TechStackSection from "../Components/layout/hero/TechStackSection"; 
import ContactSection from "../Components/layout/hero/ContactSection";
const ServicesPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Hero2
        smallTitle="Our Offerings"
        title="We Provide Smart Digital Services"
        description="From full-stack development to AI-powered solutions, we turn your ideas into reality."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        backgroundImage={bgServices}
      />

      {/* Services Section */}
      <Services />
      <TechStackSection  />
      <ContactSection />

      
    </div>
  );
};

export default ServicesPage;
