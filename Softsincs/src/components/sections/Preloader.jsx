import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      role="alert"
      aria-busy="true"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Simple Logo */}
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
          Softsincs
        </h1>
        
        {/* Tagline */}
        <p className="text-black text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
