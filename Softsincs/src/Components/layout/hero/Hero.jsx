import React from 'react';
import HeroButtons from './HeroButtons';
const Hero = () => {
  return (
   <section className="pt-[140px] relative h-screen w-full overflow-hidden">
  {/* Image Background */}
  <img
    src="/Services-Images/picture.jpg"
    alt="Service"
    className="absolute top-0 left-0 object-cover w-full h-full"
  />

  {/* Optional content on top */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl font-bold">Welcome to Softsincs</h1>
    <p className="mt-4 text-lg">Your digital innovation partner.</p>
  </div>




      {/* Transparent Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-transparent">
        <div className="max-w-3xl p-4 mx-auto text-center text-white md:p-8">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl drop-shadow-lg">
            Empowering Your Digital Future
          </h1>
          <p className="mb-6 text-lg md:text-xl drop-shadow">
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
