import {
  FaBriefcase, FaUserTie, FaProjectDiagram, FaUsers
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const highlights = [
  {
    icon: FaBriefcase,
    title: "5+ Years",
    description: "Industry Experience",
  },
  {
    icon: FaUserTie,
    title: "30+ Engineers",
    description: "Skilled Professionals",
  },
  {
    icon: FaProjectDiagram,
    title: "60+ Projects",
    description: "Delivered Successfully",
  },
  {
    icon: FaUsers,
    title: "90+ Clients",
    description: "Worldwide",
  },
];

const KeyHighlights = () => {
  return (
    <section
      className="py-20 text-black"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, #dbe4ff 0%, #f0f4ff 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#2e35d7] drop-shadow-md">
          Key Highlights
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="
                relative bg-gradient-to-br from-[#3742fa] via-[#2e35d7] to-[#1e22aa] 
                rounded-3xl p-10 text-center shadow-2xl
                transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl
                cursor-pointer
                before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-[#5a69d8] before:to-[#223d9a] before:opacity-40 before:-z-10
              "
            >
              <item.icon className="text-6xl text-white mb-6 drop-shadow-lg" />
              <h3 className="text-3xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-white/90 text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            className="w-full max-w-xs mx-auto pb-10"
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative bg-gradient-to-br from-[#3742fa] via-[#2e35d7] to-[#1e22aa]
                    rounded-3xl p-8 text-center shadow-2xl
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl
                    cursor-pointer
                    before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-[#5a69d8] before:to-[#223d9a] before:opacity-40 before:-z-10
                  "
                >
                  <item.icon className="text-5xl text-white mb-5 drop-shadow-lg mx-auto" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
