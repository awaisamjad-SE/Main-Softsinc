// src/Components/layout/CareerSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import jobsData from "../../data/jobsData";

const CareerSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-900 text-center mb-10">Current Openings</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsData.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-indigo-300 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-1"><strong>Type:</strong> {job.type}</p>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-600 mb-3"><strong>Experience:</strong> {job.experience}</p>
            <p className="text-sm text-gray-500 mb-4">{job.description}</p>
            
            <Link
              to={`/carrers/${job.slug}`}
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
