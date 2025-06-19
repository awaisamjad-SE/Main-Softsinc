import React from 'react';
import HeroButtons from './HeroButtons';
import bgVideo from '../../../assets/Images/hero2.mp4'

const Hero = () => {
  return (
    <section className="pt-[140px] relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <div className="max-w-3xl p-6 mx-auto text-center text-white md:p-10">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Empowering Your Digital Future
          </h1>
          <p className="mb-6 text-lg md:text-xl">
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
