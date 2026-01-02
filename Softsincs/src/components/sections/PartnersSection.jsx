import React from 'react';
import partner1 from '../../assets/Images/background.jpg';
import partner2 from '../../assets/Images/background.jpg';
import partner3 from '../../assets/Images/background.jpg';
import partner4 from '../../assets/Images/background.jpg';
const PartnersSection = () => {
    return (

        <>
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Partners</span>
                    </h2>
                    <p className="text-gray-300 mb-10">
                        We’re proud to collaborate with visionary companies, tools, and institutions who share our mission to transform education.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                        <img src={partner1} alt="Partner 1" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        <img src={partner2} alt="Partner 2" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        <img src={partner3} alt="Partner 3" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        <img src={partner4} alt="Partner 4" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900 py-16">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to be part of our story?
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        Join us on our mission to transform education. Whether you're a student, educator, or enthusiast—we'd love to hear from you.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg"
                    >
                        Contact Us
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

        </>
    );
};

export default PartnersSection;
