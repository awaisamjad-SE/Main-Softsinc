import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Hero2 from '../components/sections/Hero2';
import bg from '../assets/Images/background.jpg';

const Sitemap = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', path: '/home' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      category: 'Company',
      links: [
        { name: 'Team', path: '/team' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Our Process', path: '/process' },
        { name: 'Technology Stack', path: '/technology' },
      ]
    },
    {
      category: 'Solutions',
      links: [
        { name: 'For Startups', path: '/startups' },
        { name: 'For Enterprises', path: '/enterprises' },
      ]
    },
    {
      category: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Internships', path: '/internships' },
      ]
    },
    {
      category: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Sitemap', path: '/sitemap' },
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Softsincs | Complete Website Navigation"
        description="Explore Softsincs' complete sitemap to easily navigate through all our pages including services, resources, company information, and legal documents."
        keywords="sitemap, site navigation, website structure, all pages"
        url="https://softsincs.com/sitemap"
      />
      
      <Hero2
        smallTitle="Sitemap"
        title="Navigate Our Website"
        description="Find everything you need quickly and easily"
        backgroundImage={bg}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-glow transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-4 border-b-2 border-primary-200 pb-2">
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path}
                      className="text-gray-700 hover:text-primary-600 flex items-center group transition-colors duration-200"
                    >
                      <svg 
                        className="w-4 h-4 mr-2 text-primary-400 group-hover:text-primary-600 transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you navigate and find exactly what you need.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
