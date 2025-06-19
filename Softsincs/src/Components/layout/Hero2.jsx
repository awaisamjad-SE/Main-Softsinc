import React from "react";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom"; // Needed to handle internal navigation

const Hero2 = ({
  smallTitle = "About Us",
  title = "Empowering Businesses, Inspiring Innovation",
  description = "At Devsinc, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence, a global team of over 2,000 experts, and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.",
  buttonText = "Get in Touch",
  buttonLink = "/contact", // Use an actual route instead of "#"
  backgroundImage = "/default-hero-bg.jpg",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonLink.startsWith("/")) {
      // internal navigation
      navigate(buttonLink);
    } else {
      // external link or anchor
      window.location.href = buttonLink;
    }
  };

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl px-6 py-10">
        <h4 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-gray-300 mb-2">
          {smallTitle}
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">{description}</p>

        <Button text={buttonText} onClick={handleClick} variant="primary" />
      </div>
    </div>
  );
};

export default Hero2;
