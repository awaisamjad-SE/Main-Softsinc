import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [currentWord, setCurrentWord] = useState(0);
  
  // Only 10 key tech words
  const techWords = [
    "Innovation",
    "Development",
    "Technology",
    "Solutions",
    "AI & ML",
    "Cloud",
    "Security",
    "Mobile",
    "Analytics",
    "Design"
  ];

  // Fixed positions for each word to avoid overlap
  const wordPositions = [
    { top: '15%', left: '10%', rotate: -12 },
    { top: '25%', left: '75%', rotate: 8 },
    { top: '45%', left: '15%', rotate: -8 },
    { top: '60%', left: '70%', rotate: 10 },
    { top: '75%', left: '20%', rotate: -10 },
    { top: '20%', left: '45%', rotate: 6 },
    { top: '70%', left: '50%', rotate: -7 },
    { top: '35%', left: '85%', rotate: 9 },
    { top: '55%', left: '40%', rotate: -9 },
    { top: '85%', left: '65%', rotate: 11 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % techWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Tech Words Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0">
          {techWords.map((word, index) => {
            const isActive = index === currentWord;
            const isPrevious = index === (currentWord - 1 + techWords.length) % techWords.length;
            const isNext = index === (currentWord + 1) % techWords.length;
            
            let opacity = 'opacity-[0.03]';
            let scale = 'scale-95';
            
            if (isActive) {
              opacity = 'opacity-[0.10]';
              scale = 'scale-100';
            } else if (isPrevious || isNext) {
              opacity = 'opacity-[0.0]';
              scale = 'scale-98';
            }
            
            return (
              <div
                key={index}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black transition-all duration-1000 ease-in-out ${opacity} ${scale}`}
                style={{
                  position: 'absolute',
                  top: wordPositions[index].top,
                  left: wordPositions[index].left,
                  transform: `rotate(${wordPositions[index].rotate}deg)`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;
