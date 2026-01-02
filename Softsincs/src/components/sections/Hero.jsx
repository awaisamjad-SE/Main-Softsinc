import React, { useEffect, useState } from "react";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(true);
    
    // Animate tech words - faster animation
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % techWords.length);
    }, 1200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[80px] relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Animated Tech Words Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex flex-wrap items-center justify-around gap-8 p-8">
          {techWords.map((word, index) => {
            const isActive = index === currentWord;
            const isPrevious = index === (currentWord - 1 + techWords.length) % techWords.length;
            const isNext = index === (currentWord + 1) % techWords.length;
            
            let opacity = 'opacity-[0.03]';
            let scale = 'scale-100';
            
            if (isActive) {
              opacity = 'opacity-[0.15]';
              scale = 'scale-110';
            } else if (isPrevious || isNext) {
              opacity = 'opacity-[0.08]';
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
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
        
         

          {/* Main Heading */}
          <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-5xl animate-fade-in-up">
            Empowering Your
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Digital Future
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl px-4 mx-auto mt-2 mb-6 text-sm leading-relaxed text-gray-300 sm:mb-8 sm:text-base md:text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform your vision into reality with cutting-edge software solutions. 
            We build innovative, scalable, and user-centric applications.
          </p>

          {/* Stats Bar */}
          <div className="grid justify-center grid-cols-2 gap-4 px-4 mb-6 sm:mb-8 sm:flex sm:flex-wrap sm:gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-3 text-center shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 sm:p-4 rounded-xl hover:bg-opacity-70 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-purple-400">250+</div>
              <div className="text-xs text-gray-300 sm:text-sm">Projects</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 sm:p-4 rounded-xl hover:bg-opacity-70 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-pink-400">100+</div>
              <div className="text-xs text-gray-300 sm:text-sm">Clients</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 sm:p-4 rounded-xl hover:bg-opacity-70 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-indigo-400">50+</div>
              <div className="text-xs text-gray-300 sm:text-sm">Team</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 sm:p-4 rounded-xl hover:bg-opacity-70 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-purple-400">5+</div>
              <div className="text-xs text-gray-300 sm:text-sm">Years</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-6 animate-fade-in-up sm:mb-8" style={{ animationDelay: '0.6s' }}>
            <HeroButtons />
          </div>

       
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
