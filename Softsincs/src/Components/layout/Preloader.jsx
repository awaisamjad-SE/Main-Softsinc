import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a 3-second delay after load before hiding the preloader
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-white
      "
      aria-label="Loading"
      role="alert"
      aria-busy="true"
    >
      <div className="flex space-x-3">
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-pulse"></span>
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-pulse animation-delay-150"></span>
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-pulse animation-delay-300"></span>
      </div>
    </div>
  );
};

export default Preloader;
