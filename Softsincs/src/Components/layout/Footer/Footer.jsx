import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Leadership", path: "/leadership" },
      { name: "Careers", path: "/careers" },
      { name: "Internships", path: "/internships" },
    ],
    services: [
      { name: "All Services", path: "/services" },
      { name: "For Startups", path: "/startup" },
      { name: "For Enterprises", path: "/enterprises" },
      { name: "Technologies", path: "/technology" },
      { name: "Our Process", path: "/process" },
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Contact Us", path: "/contact" },
      { name: "Sitemap", path: "/sitemap" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/softsincs",
      icon: (
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/softsincs",
      icon: (
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/softsincs",
      icon: (
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/softsincs",
      icon: (
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/softsincs",
      icon: (
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="text-2xl font-bold text-white">Softsincs</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Softsinc Technologies</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building innovative tech solutions that lead the industry and deliver exceptional value to our clients worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Ghirnatah, Dammam, Saudi Arabia</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:support@softsincs.com" className="text-sm hover:text-purple-400 transition-colors">
                  support@softsincs.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06l-1.55.77a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+966152255365" className="text-sm hover:text-purple-400 transition-colors">
                  +966 1 5225 5365
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-white font-semibold">Softsinc Technologies</span>. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Empowering Digital Innovation Since 2020
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400 mr-2">Follow us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 50+ Clients Worldwide
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              100+ Projects Delivered
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              98% Client Satisfaction
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              24/7 Support Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
