import React from "react";
import Logo from "../navbar/Logo"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-200\">
      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-4\">" 

        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Logo />
          <h2 className="mt-2 text-2xl font-bold">Softsinc Technologies</h2>
          <p className="max-w-xs mt-2 text-sm">
            Building innovative tech solutions that lead the industry and deliver exceptional value.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="mb-2 text-xl font-semibold">Quick Links</h3>
          <a href="/about" className="hover:text-[#f4379d] transition">About Us</a>
          <a href="/services" className="hover:text-[#f4379d] transition">Services</a>
          <a href="/careers" className="hover:text-[#f4379d] transition">Careers</a>
          <a href="/blog" className="hover:text-[#f4379d] transition">Blog</a>
          <a href="/contact" className="hover:text-[#f4379d] transition">Contact</a>
        </div>
        
        {/* Legal Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="mb-2 text-xl font-semibold">Legal</h3>
          <a href="/privacy-policy" className="hover:text-[#f4379d] transition">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-[#f4379d] transition">Terms of Service</a>
          <a href="/sitemap" className="hover:text-[#f4379d] transition">Sitemap</a>
          <div className="mt-4">
            <p>Email: <a href="mailto:softsincs@gmail.com" className="underline hover:text-[#f4379d]">softsincs@gmail.com</a></p>
            <p>Phone: <a href="tel:+966152255365" className="underline hover:text-[#f4379d]">+966 1 5225 5365</a></p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/softsincs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-600 transition-colors transform hover:scale-110">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com/softsincs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-600 transition-colors transform hover:scale-110">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://instagram.com/softsincs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-600 transition-colors transform hover:scale-110">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/softsincs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-600 transition-colors transform hover:scale-110">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-10 text-primary-900 border-t border-primary-200 pt-4">
        <p className="mb-2">© 2025 Softsinc Technologies | All Rights Reserved</p>
        <p className="text-xs text-primary-600">Headquarters: Ghirnatah, Dammam, Saudi Arabia</p>
      </div>
    </footer>
  );
};

export default Footer;
