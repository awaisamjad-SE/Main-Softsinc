import React, { useEffect, useState } from "react";
import AnimatedBackground from "../common/AnimatedBackground";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-[80px] relative min-h-screen w-full overflow-hidden bg-white">
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
        
         

          {/* Main Heading */}
          <h1 className="mb-4 text-2xl font-bold leading-tight text-black sm:mb-6 sm:text-4xl md:text-5xl lg:text-5xl animate-fade-in-up">
            Empowering Your
            <span className="block mt-3 text-black">
              Digital Future
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl px-4  mx-auto mt-2 mb-6 text-sm leading-relaxed text-black sm:mb-8 sm:text-base md:text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform your vision into reality with cutting-edge software solutions. 
            We build innovative, scalable, and user-centric applications.
          </p>

          {/* Stats Bar */}
          <div className="grid justify-center grid-cols-2 gap-4 px-4 mb-6 sm:mb-8 sm:flex sm:flex-wrap sm:gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-3 text-center shadow-lg bg-white border border-black sm:p-4 rounded-xl hover:bg-gray-50 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-black">250+</div>
              <div className="text-xs text-black sm:text-sm">Projects</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-white border border-black sm:p-4 rounded-xl hover:bg-gray-50 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-black">100+</div>
              <div className="text-xs text-black sm:text-sm">Clients</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-white border border-black sm:p-4 rounded-xl hover:bg-gray-50 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-black">50+</div>
              <div className="text-xs text-black sm:text-sm">Team</div>
            </div>
            <div className="p-3 text-center shadow-lg bg-white border border-black sm:p-4 rounded-xl hover:bg-gray-50 transition-all">
              <div className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-black">5+</div>
              <div className="text-xs text-black sm:text-sm">Years</div>
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
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
