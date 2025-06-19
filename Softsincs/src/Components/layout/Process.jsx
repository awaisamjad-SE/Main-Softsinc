import React from "react";

const processSteps = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business needs, goals, and technical requirements.",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    ),
  },
  {
    step: 2,
    title: "Design & Planning",
    description:
      "Our UI/UX experts design intuitive interfaces, while the dev team plans the architecture.",
    icon: (
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    ),
  },
  {
    step: 3,
    title: "Development",
    description:
      "Our skilled developers write clean, scalable code and implement functionalities.",
    icon: (
      <>
        <circle cx="12" cy="5" r="3"></circle>
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
      </>
    ),
  },
  {
    step: 4,
    title: "Testing & Delivery",
    description:
      "After thorough testing, we deliver the product and provide post-launch support.",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </>
    ),
  },
];

const Process = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">

        {processSteps.map((step, index) => (
          <div
            key={step.step}
            className={`flex relative ${
              index === processSteps.length - 1 ? "pb-10" : "pb-20"
            } sm:items-center md:w-2/3 mx-auto`}
          >
            {/* Vertical Line */}
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>

            {/* Step Number */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              {step.step}
            </div>

            {/* Step Content */}
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  {step.icon}
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {step.title}
                </h2>
                <p className="leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
