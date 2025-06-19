import React from "react";
import Hero2 from "../Components/layout/Hero2";
import bgContact from "../assets/Images/background.jpg"; // Use your own contact background image
import ContactSection from "../Components/layout/hero/ContactSection";
const Contact = () => {
  return (
    <>
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
