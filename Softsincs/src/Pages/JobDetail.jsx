// src/pages/JobDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";
import Hero2 from "../Components/layout/Hero2";
import jobImage from "../assets/Images/background.jpg"

const JobDetail = () => {
  const { slug } = useParams();
  const job = jobsData.find((job) => job.slug === slug);

  // ❌ Job Not Found
  if (!job) {
    return (
      <>
        <Hero2
          smallTitle="404"
          title="Job Not Found"
          description="The position you're looking for may have been filled or doesn't exist."
          backgroundImage={jobImage}
          buttonText="Back to Careers"
          buttonLink="/carrers"
        />
        <div className="text-center py-20 text-red-600 text-xl font-semibold">
          No job was found with the given URL.
        </div>
      </>
    );
  }

  // ✅ Job Found
  return (
    <>
      <Hero2
        smallTitle="Apply Now"
        title={job.title}
        description={`Join us as a ${job.title} and help build the future.`}
        backgroundImage={jobImage}
        buttonText="Back to Careers"
        buttonLink="/careers"
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">{job.title}</h1>
        <div className="text-gray-600 mb-6">
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience Required:</strong> {job.experience}</p>
        </div>

        <p className="text-lg mb-6 text-gray-800">{job.description}</p>

        {job.responsibilities && (
          <>
            <h2 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </>
        )}

        {job.requirements && (
          <>
            <h2 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-10 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-lg text-gray-800 mb-2">
            Interested candidates can send their resume to:
          </p>
          <a
            href="mailto:softsincs@gmail.com"
            className="text-indigo-600 font-semibold hover:underline"
          >
            softsincs@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
