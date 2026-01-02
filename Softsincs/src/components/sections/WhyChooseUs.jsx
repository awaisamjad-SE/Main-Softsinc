import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WhyChooseUs = () => {
const features = [
  {
    title: "Youth-Driven Innovation",
    description:
      "Powered by Pakistan's thriving young talent, our solutions reflect energy, agility, and modern thinking.",
  },
  {
    title: "World-Class Team",
    description:
      "Over 20 elite staff, 90% in the top 5% of their fields, with senior management in the top 1%.",
  },
  {
    title: "Extensive Expertise & Worldwide Presence",
    description:
      "30+ projects completed across 13 countries, delivering global solutions with a local touch.",
  },
  {
    title: "Proven Case Studies",
    description:
      "Successful projects for startups, industry giants, and governments across various sectors.",
  },
  {
    title: "Cost Effective",
    description: "High-value solutions without the premium price tag.",
  },
  {
    title: "Trusted IT Exporter",
    description:
      "Recognized among Pakistan’s top IT exporters, delivering scalable products for global markets.",
  },
];


  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-gray-200 py-20 px-4 min-h-screen">
      <div className="max-w-6xl px-4 mx-auto mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Special?</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          At <span className="font-semibold">Softsinc</span>, our commitment to innovation and excellence sets us apart. Here’s why clients trust us to deliver world-class results:
        </p>
      </div>

      <VerticalTimeline lineColor="#a855f7">
        {features.map((feature, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "rgba(31, 41, 55, 0.5)",
              color: "#e5e7eb",
              borderRadius: "24px",
              border: "1.5px solid #a855f7",
              boxShadow: "0 8px 30px rgba(168, 85, 247, 0.2)",
              backdropFilter: "blur(10px)",
              padding: "24px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(168, 85, 247, 0.5)",
            }}
            iconStyle={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
            icon={<span className="text-lg font-bold">★</span>}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-[#2e35d7] text-sm md:text-base">
              {feature.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default WhyChooseUs;
