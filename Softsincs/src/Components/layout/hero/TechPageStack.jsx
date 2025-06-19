import React from "react";
import techData from "../../../data/techdata"; // same data source as before

const TechCard = ({ Icon, label }) => (
  <div
    className="
      bg-white/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center
      cursor-pointer
      transition-transform duration-300 ease-in-out
      shadow-md hover:shadow-indigo-500/70 hover:shadow-lg
      hover:scale-105 hover:bg-indigo-600
      ring-1 ring-transparent hover:text-white
      focus:outline-none focus:ring-2 focus:ring-indigo-500
      relative
      select-none
    "
    aria-label={label}
    role="img"
    tabIndex={0}
  >
    <Icon
      className="
        text-indigo-900 hover:text-white text-6xl mb-4 drop-shadow-md
        transition-colors duration-300 ease-in-out
      "
      aria-hidden="true"
    />
    <p className="text-indigo-900 hover:text-white font-semibold text-center text-base md:text-lg">
      {label}
    </p>
    <span
      className="
        absolute inset-0 rounded-2xl pointer-events-none
        opacity-0 hover:opacity-30 bg-gradient-to-tr from-indigo-400 to-indigo-700
        transition-opacity duration-300 ease-in-out
        blur-xl
        z-[-1]
      "
    />
  </div>
);

const TechPageStack = () => {
  return (
    <section
      className="bg-gradient-to-tr from-indigo-100 via-indigo-50 to-indigo-100 py-20 min-h-screen"
      aria-label="Technology Stack Grid"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-indigo-900 pb-14 text-center drop-shadow-sm">
          Technology Stack by Category
        </h1>

        {techData.map(({ category, items }) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-indigo-800 mb-8">{category}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {items.map(({ icon: Icon, label }, index) => (
                <TechCard key={index} Icon={Icon} label={label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechPageStack;
