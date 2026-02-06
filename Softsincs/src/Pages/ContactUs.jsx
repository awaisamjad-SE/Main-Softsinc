import React from "react";
import SEO from '../components/common/SEO';
import AnimatedBackground from '../components/common/AnimatedBackground';
import Hero2 from "../components/sections/Hero2";
import bgContact from "../assets/Images/background.jpg"; // Use your own contact background image
import ContactSection from "../components/sections/ContactSection";
const Contact = () => {
  return (
    <>
      <AnimatedBackground />
      <SEO 
        title="Contact Us - Softsincs | Let's Build Something Amazing Together"
        description="Get in touch with Softsincs for your software development needs. Our expert team is ready to help you transform your ideas into reality. Free consultation available."
        keywords="contact softsincs, software development inquiry, free consultation, get quote, hire developers, project consultation"
        url="https://softsincs.com/contact"
      />
      <Hero2
        smallTitle="Contact Us"
        title="Let's Connect and Collaborate"
        description="Whether you have a question, a project idea, or just want to say hello — we’d love to hear from you. Reach out and let's explore how we can create something great together."
        buttonText="Send a Message"
        buttonLink="/contact-form" // Optional: link to a dedicated contact form or section
        backgroundImage={bgContact}
      />

      {/* Optional: Add contact form or details below the Hero */}
      {/* Example: */}
<ContactSection />
      
    </>
  );
};

export default Contact;
