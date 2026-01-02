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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-700 to-pink-600 overflow-hidden"
      role="alert"
      aria-busy="true"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-white border-t-pink-400 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin-reverse"></div>
          </div>
          <div className="relative flex items-center justify-center w-32 h-32">
            <div className="text-white text-5xl font-bold animate-pulse drop-shadow-2xl">S</div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up drop-shadow-lg">
          Softsincs
        </h1>
        
        {/* Tagline */}
        <p className="text-white text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Empowering Digital Innovation
        </p>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mb-4">
          <div className="h-3 bg-white bg-opacity-20 rounded-full overflow-hidden backdrop-blur-sm shadow-lg">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-base font-semibold animate-pulse drop-shadow-md">
          Loading amazing experience... {Math.round(Math.min(progress, 100))}%
        </div>

        {/* Dots Animation */}
        <div className="flex space-x-2 mt-6">
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce shadow-lg"></span>
          <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></span>
          <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></span>
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="rgba(255,255,255,0.3)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
