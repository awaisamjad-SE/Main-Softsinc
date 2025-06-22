import React from "react";
import Logo from "../Navbar/Logo"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-[#e4e7ff] text-[#2e35d7] py-10 border-t border-[#cdd1f9]">
      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-3">

        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Logo />
          <h2 className="mt-2 text-2xl font-bold">Softsinc Technologies</h2>
          <p className="max-w-xs mt-2 text-sm">
            Building innovative tech solutions that lead the industry and deliver exceptional value.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
          <p>Email: <a href="mailto:softsincs@gmail.com" className="underline">softsincs@gmail.com</a></p>
          <p>Phone: <a href="tel:+923473706598" className="underline">+92 347 3706598</a></p>
          <p>Headquarters: 643 L Block, Sabzazar, Lahore</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-[#2e35d7] hover:text-[#f4379d] transition">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-[#2e35d7] hover:text-[#f4379d] transition">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="text-[#2e35d7] hover:text-[#f4379d] transition">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              </svg>
            </a>
            <a href="#" className="text-[#2e35d7] hover:text-[#f4379d] transition">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-10 text-[#2e35d7] border-t border-[#cdd1f9] pt-4">
        © 2025 Softsinc Technologies | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
