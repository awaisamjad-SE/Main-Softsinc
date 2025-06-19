import React, { useState } from 'react';
import Card from '../../Ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesData from '../../../data/servicesData'; // ✅ Use this only


function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? servicesData : servicesData.slice(0, 4);

  return (
    <div className="bg-[#e4e7ff] py-12 px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2e35d7]">Our Services</h2>
        <p className="text-gray-700 mt-2 text-lg">Transform Your Business</p>
      </div>

      {/* Mobile & Tablet: Slider */}
      <div className="block md:hidden relative">
        <Swiper
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          className="w-full max-w-xs mx-auto pb-10"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <Card
                title={service.title}
                tag={service.tag}
                link={service.link}
                bgImage={service.bgImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Move pagination dots lower and center */}
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
      <div className="hidden md:flex flex-wrap justify-center gap-6">
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
      <div className="hidden lg:block text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#2e35d7] hover:bg-blue-800 text-white px-6 py-2 rounded-full transition"
        >
          {showAll ? 'View Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Services;
