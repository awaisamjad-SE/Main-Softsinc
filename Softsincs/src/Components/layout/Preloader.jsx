import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 overflow-hidden"
      role="alert"
      aria-busy="true"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="relative flex items-center justify-center w-32 h-32">
            <div className="text-white text-4xl font-bold animate-pulse">S</div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          Softsincs
        </h1>
        
        {/* Tagline */}
        <p className="text-white text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empowering Digital Innovation
        </p>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mb-4">
          <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-sm font-medium animate-pulse">
          Loading amazing experience... {Math.round(Math.min(progress, 100))}%
        </div>

        {/* Dots Animation */}
        <div className="flex space-x-2 mt-6">
          <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="rgba(255,255,255,0.1)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
