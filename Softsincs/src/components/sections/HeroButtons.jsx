import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      <button
        onClick={() => navigate('/services')}
        className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-black text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
      >
        <span className="relative z-10 flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Explore Services
        </span>
      </button>
      
      <button
        onClick={() => navigate('/contact')}
        className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white text-black border-2 border-black font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Let's Talk Business
      </button>
    </div>
  );
};

export default HeroButtons;
