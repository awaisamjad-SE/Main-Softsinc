import React from 'react';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="card animate-pulse">
            <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        );
      
      case 'list':
        return (
          <div className="flex items-center space-x-4 mb-4 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        );
      
      case 'hero':
        return (
          <div className="w-full h-96 bg-gray-300 rounded-lg animate-pulse"></div>
        );
      
      default:
        return (
          <div className="h-20 bg-gray-300 rounded animate-pulse"></div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
