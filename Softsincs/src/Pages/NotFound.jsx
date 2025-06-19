import React from 'react';
import { Link } from 'react-router-dom';
import Hero2 from '../Components/layout/Hero2';

const NotFound = () => {
  return (
    <div>
      {/* Custom Hero Section with background override */}
      <div className="bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
        <Hero2
          smallTitle="Page Not Found"
          title="404 - Oops! This Page Doesn't Exist"
          description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          buttonText="Go to Home"
          buttonLink="/"
        />
      </div>

      {/* Return Link */}
      <div className="text-center mt-10 mb-20">
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 font-medium text-lg transition duration-300"
        >
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
  