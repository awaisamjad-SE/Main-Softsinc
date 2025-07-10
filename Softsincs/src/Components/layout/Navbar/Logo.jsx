import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/Images/softsinc.png'; // Main logo
import image2 from '../../../assets/Images/softsinc logo 1.png'; // Main logo


const Logo = () => {
  return (
    <Link to="/" className="relative block w-40 h-20 overflow-hidden cursor-pointer group">
      {/* Main logo (visible by default) */}
      <img
        src={image2}
        alt="Logo"
        className="absolute inset-0 object-contain w-full h-full transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Hover logo (visible on hover) */}
      <img
        src={image1}
        alt="Hover Logo"
        className="absolute inset-0 object-contain w-full h-full transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
};

export default Logo;
