import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Government Endorsement",
      description: "Recognized by key government bodies for trusted expertise and leadership in technology.",
    },
    {
      title: "World-Class Team",
      description: "Over 200 elite staff, 90% in the top 5% of their fields, with senior management in the top 1%.",
    },
    {
      title: "Extensive Expertise & Worldwide Presence",
      description: "200+ projects completed across 13 countries, delivering global solutions with a local touch.",
    },
    {
      title: "Proven Case Studies",
      description: "Successful projects for startups, industry giants, and governments across various sectors.",
    },
    {
      title: "Cost Effective",
      description: "High-value solutions without the premium price tag.",
    },
    {
      title: "Unmatched Success",
      description: "Global tech pacesetter in 2023 and 2024 with a legacy of groundbreaking achievements.",
    },
  ];

  return (
    <section className=" bg-[#e4e7ff] text-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2e35d7] mb-4">What Makes Us Special?</h2>
        <p className="text-[#2e35d7] max-w-2xl mx-auto">
          At Softsinc, our commitment to innovation and excellence sets us apart. Here’s why clients choose us:
        </p>
      </div>

      <VerticalTimeline>
        {features.map((feature, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.6)",
              color: "#2e35d7",
              borderRadius: "40px",
              border: "2px solid #2e35d7",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)", // Now visible
            }}

            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
            iconStyle={{
              background: "#2e35d7",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
            icon={<span className="text-lg font-bold">★</span>}
          >
            <h3 className="text-xl text-[#2e35d7] font-bold">{feature.title}</h3>
            <p className="text-[#2e35d7] text-sm mt-2">{feature.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default WhyChooseUs;
