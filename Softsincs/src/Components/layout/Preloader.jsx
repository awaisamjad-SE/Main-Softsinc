import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Delay to allow animations or additional effects
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust delay as needed
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      role="alert"
      aria-busy="true"
    >
      <div className="flex space-x-3">
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-bounce"></span>
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-bounce delay-150"></span>
        <span className="w-5 h-5 bg-violet-600 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default Preloader;
