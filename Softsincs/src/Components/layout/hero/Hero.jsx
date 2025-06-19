import React from 'react';
import HeroButtons from './HeroButtons';
import bgVideo from '../../../assets/Images/hero2.mp4'

const Hero = () => {
  return (
    <section className="pt-[140px] relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <div className="text-center text-white p-6 md:p-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Your Digital Future
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Custom software solutions that drive innovation and growth.
          </p>

          {/* Buttons */}
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
