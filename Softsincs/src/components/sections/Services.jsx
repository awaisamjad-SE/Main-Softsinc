import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesData from '../../data/servicesData';

function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? servicesData : servicesData.slice(0, 4);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-12 px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span></h2>
        <p className="mt-2 text-lg text-gray-300">Transform Your Business</p>
      </div>

      {/* Mobile & Tablet: Swiper */}
      <div className="relative block md:hidden">
        <Swiper
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          className="w-full pb-10"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Card
                  title={service.title}
                  tag={service.tag}
                  link={service.link}
                  bgImage={service.bgImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Dots Styling */}
        <style>
          {`
            .swiper-pagination {
              bottom: 0px !important;
              text-align: center;
            }
            .swiper-pagination-bullet {
              background: #2e35d7 !important;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #000 !important;
            }
          `}
        </style>
      </div>

      {/* Desktop: Grid View */}
      <div className="flex-wrap justify-center hidden gap-6 md:flex">
        {visibleCards.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            tag={service.tag}
            link={service.link}
            bgImage={service.bgImage}
          />
        ))}
      </div>

      {/* Show More / View Less Button */}
      <div className="hidden mt-12 text-center lg:block">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full transition shadow-lg hover:shadow-xl"
        >
          {showAll ? 'View Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Services;
