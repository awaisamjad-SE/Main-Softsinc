import React, { useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import videoSrc from "../../assets/Images/hero2.mp4";
import storyImage from "../../assets/Images/background.jpg";

const AboutTimeline = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-[#f0f4ff] dark:bg-gray-900 text-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2e35d7] mb-4">Our Journey</h2>
        <p className="text-[#2e35d7] max-w-2xl mx-auto">
          Discover how Softsinc evolved from a spark of curiosity into a global force for educational innovation.
        </p>
      </div>

      <VerticalTimeline>
                {/* Our Mission */}
        <VerticalTimelineElement
          contentStyle={{
            background: "#ffffffcc",
            color: "#2e35d7",
            borderRadius: "30px",
            border: "2px solid #2e35d7",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.3)" }}
          iconStyle={{ background: "#2e35d7", color: "#fff" }}
          icon={<span className="text-lg font-bold">🎬</span>}
        >
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p className="mt-2">
            To make high-quality education accessible to all students, everywhere—using smart, scalable, and inclusive solutions.
          </p>
          <div className="relative mt-4 rounded-lg shadow-lg overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-auto rounded-xl"
              poster={storyImage} 
            />
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 hover:bg-opacity-60 transition"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              )}
            </button>
          </div>
        </VerticalTimelineElement>

        {/* Our Story */}
        <VerticalTimelineElement
          contentStyle={{
            background: "#ffffffcc",
            color: "#2e35d7",
            borderRadius: "30px",
            border: "2px solid #2e35d7",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.3)" }}
          iconStyle={{ background: "#2e35d7", color: "#fff" }}
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
            background: "#ffffffcc",
            color: "#2e35d7",
            borderRadius: "30px",
            border: "2px solid #2e35d7",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.3)" }}
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
