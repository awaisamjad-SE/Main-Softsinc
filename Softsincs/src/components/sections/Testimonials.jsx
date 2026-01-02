// src/Components/layout/Testimonials.jsx
import React from "react";
import testimonials from "../../data/testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-900 bg-opacity-50 text-purple-300 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            ⭐ Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Don't just take our word for it - hear from our satisfied clients around the globe
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-700 hover:border-purple-500 transform hover:-translate-y-2">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                    
                    {/* Star Rating */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.message}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-gray-100">
                    <div className="relative">
                      <img
                        src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&size=128`}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-purple-200 group-hover:border-purple-400 transition-colors"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&size=128`;
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !bg-gray-800 !rounded-full !shadow-lg hover:!bg-purple-600 hover:!text-white !text-purple-400 transition-all duration-300 after:!text-lg after:!font-bold"></div>
          <div className="swiper-button-next !w-12 !h-12 !bg-gray-800 !rounded-full !shadow-lg hover:!bg-purple-600 hover:!text-white !text-purple-400 transition-all duration-300 after:!text-lg after:!font-bold"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-70 transition-all">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-70 transition-all">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-gray-300 text-sm">Projects Done</div>
          </div>
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-70 transition-all">
            <div className="text-4xl font-bold text-indigo-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-70 transition-all">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
