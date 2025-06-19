import React from 'react';

const Preloader = () => {
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
