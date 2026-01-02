import { FaBriefcase, FaUserTie, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: FaBriefcase,
    title: "3+ Years",
    description: "Industry Experience",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: FaUserTie,
    title: "20+ Engineers",
    description: "Skilled Professionals",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: FaProjectDiagram,
    title: "30+ Projects",
    description: "Delivered Successfully",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FaUsers,
    title: "90+ Clients",
    description: "Worldwide",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-center text-white md:text-5xl"
        >
          Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Highlights</span>
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center shadow-md hover:shadow-lg hover:border-${item.iconColor.replace('text-', '')} transition-all duration-300`}
            >
              <div className={`${item.iconColor} mb-6 text-5xl flex justify-center`}>
                <item.icon className="inline-block" />
              </div>
              <h3 className="mb-2 text-3xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2,
              }
            }}
            className="w-full px-2 pb-12"
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`${item.bgColor} rounded-xl p-6 text-center shadow-sm h-full`}
                >
                  <div className={`${item.iconColor} mb-4 text-4xl flex justify-center`}>
                    <item.icon className="inline-block" />
                  </div>
                  <h3 className="mb-1 text-2xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;