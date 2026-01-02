import React from "react";
import techStack from "../../data/techdata"; // your original import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TechCard = ({ Icon, label }) => (
  <div
    className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center
               cursor-pointer transition-transform duration-300 ease-in-out
               shadow-md hover:shadow-purple-500/60 hover:shadow-lg hover:scale-105 hover:bg-purple-600
               ring-1 ring-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500
               relative"
    aria-label={label}
    role="img"
    tabIndex={0}
  >
    <Icon
      className="text-purple-400 hover:text-white text-5xl mb-3 drop-shadow-md
                 transition-colors duration-300 ease-in-out"
      aria-hidden="true"
    />
    <p className="text-gray-200 hover:text-white font-semibold text-center text-sm md:text-base select-none">
      {label}
    </p>
    <span
      className="absolute inset-0 rounded-2xl pointer-events-none
                 opacity-0 hover:opacity-30 bg-gradient-to-tr from-purple-400 to-pink-600
                 transition-opacity duration-300 ease-in-out blur-xl z-[-1]"
    />
  </div>
);

const TechStackSection = () => {
  // flatten items array from all categories
  const flatTechStack = techStack.flatMap(category => category.items);

  return (
    <section
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-20"
      aria-label="Technology Stack"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-14 text-center drop-shadow-sm">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tech Stack</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-10"
          aria-label="Technology slider"
          role="list"
        >
          {flatTechStack.map(({ icon: Icon, label }, index) => (
            <SwiperSlide key={index} role="listitem">
              <TechCard Icon={Icon} label={label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechStackSection;
