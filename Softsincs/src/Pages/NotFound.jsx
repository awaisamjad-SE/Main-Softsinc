import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/Common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Softsincs"
        description="The page you are looking for cannot be found. Return to Softsincs homepage to explore our software development services."
        url="https://softsincs.com/404"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gradient animate-pulse">
              404
            </h1>
          </div>

          {/* Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Animated Icon */}
          <div className="mb-8">
            <div className="inline-block animate-bounce">
              <svg 
                className="w-24 h-24 text-primary-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              Contact Support
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/services" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/about" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/careers" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                Careers
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/blog" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
  