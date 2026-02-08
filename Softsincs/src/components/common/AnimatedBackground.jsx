import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [currentWord, setCurrentWord] = useState(0);
  
  const techWords = [
    "AI & Machine Learning",
    "Cloud Computing",
    "Blockchain",
    "Mobile Apps",
    "Web Development",
    "DevOps",
    "Cybersecurity",
    "IoT Solutions",
    "Data Analytics",
    "API Development",
    "React & Angular",
    "Node.js",
    "Python & Django",
    "Docker & Kubernetes",
    "AWS & Azure",
    "MongoDB & SQL",
    "GraphQL & REST",
    "TypeScript",
    "Microservices",
    "Agile & Scrum"
  ];

  useEffect(() => {
    // Animate tech words - faster animation
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % techWords.length);
    }, 1200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Tech Words Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 flex flex-wrap items-center justify-around gap-8 p-8">
          {techWords.map((word, index) => {
            const isActive = index === currentWord;
            const isPrevious = index === (currentWord - 1 + techWords.length) % techWords.length;
            const isNext = index === (currentWord + 1) % techWords.length;
            
            let opacity = 'opacity-[0.03]';
            let scale = 'scale-100';
            
            if (isActive) {
              opacity = 'opacity-[0.50]';
              scale = 'scale-110';
            } else if (isPrevious || isNext) {
              opacity = 'opacity-[0.50]';
              scale = 'scale-105';
            }
            
            return (
              <div
                key={index}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 transition-all duration-700 ${opacity} ${scale}`}
                style={{
                  position: 'absolute',
                  top: `${(index * 10) % 80 + 10}%`,
                  left: `${(index * 15) % 80 + 10}%`,
                  transform: `rotate(${(index % 2 === 0 ? -15 : 15)}deg)`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50"></div>
    </>
  );
};

export default AnimatedBackground;
