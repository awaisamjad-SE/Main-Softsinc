import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import storyImage from "../../assets/Images/background.jpg";

const AboutTimeline = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-gray-200 py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover how Softsinc evolved from a spark of curiosity into a global force for educational innovation.
        </p>
      </div>

      <VerticalTimeline>
                {/* Our Mission */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(31, 41, 55, 0.5)",
            color: "#e5e7eb",
            borderRadius: "30px",
            border: "2px solid #374151",
            backdropFilter: "blur(10px)",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(55,65,81,1)" }}
          iconStyle={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", color: "#fff" }}
          icon={<span className="text-lg font-bold">🎬</span>}
        >
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p className="mt-2">
            To make high-quality education accessible to all students, everywhere—using smart, scalable, and inclusive solutions.
          </p>
          <div className="relative mt-4 rounded-lg shadow-lg overflow-hidden">
            <img
              src={storyImage}
              alt="Our Story"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </VerticalTimelineElement>

        {/* Our Story */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(31, 41, 55, 0.5)",
            color: "#e5e7eb",
            borderRadius: "30px",
            border: "2px solid #374151",
            backdropFilter: "blur(10px)",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(55,65,81,1)" }}
          iconStyle={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", color: "#fff" }}
          icon={<span className="text-lg font-bold">🎯</span>}
        >
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="mt-2">
            It all started in a dorm room in 2021 with a dream to reshape education through tech. From brainstorming to MVP, every milestone was fueled by passion.
          </p>
          <img
            src={storyImage}
            alt="Our Story"
            className="rounded-xl mt-4 shadow-lg"
          />
        </VerticalTimelineElement>


        {/* Our Vision */}
        <VerticalTimelineElement
          contentStyle={{
            background: "#ffffff",
            color: "#1f2937",
            borderRadius: "30px",
            border: "2px solid #e5e7eb",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(229,231,235,1)" }}
          iconStyle={{ background: "#2e35d7", color: "#fff" }}
          icon={<span className="text-lg font-bold">🔭</span>}
        >
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className="mt-2">
            To be the go-to platform for smart, adaptive learning in under-resourced schools—empowering students through equity and AI-driven education.
          </p>
          <img
            src={storyImage} // replace with your vision image
            alt="Our Vision"
            className="rounded-xl mt-4 shadow-lg"
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="text-center mt-16">
  <a
    href="/contact" // Or wherever you want to link
    className="inline-flex items-center px-6 py-3 bg-[#2e35d7] text-white text-lg font-semibold rounded-full hover:bg-[#1d239f] transition duration-300 shadow-lg"
  >
    Join Our Journey
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </a>
</div>

    </section>
  );
};

export default AboutTimeline;
