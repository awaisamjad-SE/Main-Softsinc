import React from "react";
import SEO from '../components/common/SEO';
import Services from "../components/sections/Services";
import Hero2 from "../components/sections/Hero2";
import bgServices from "../assets/Images/background.jpg"; // ✅ Use a relevant image
import TechStackSection from "../components/sections/TechStackSection"; 
import ContactSection from "../components/sections/ContactSection";
const ServicesPage = () => {
  return (
    <div>
      <SEO 
        title="Our Services - Softsincs | Web, Mobile & AI Development Solutions"
        description="Explore Softsincs' comprehensive software development services including custom web applications, mobile apps, AI solutions, cloud services, and enterprise software. Get expert digital transformation services."
        keywords="software services, web development services, mobile app development, AI solutions, cloud computing, enterprise software, custom software development, digital transformation"
        url="https://softsincs.com/services"
      />
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
