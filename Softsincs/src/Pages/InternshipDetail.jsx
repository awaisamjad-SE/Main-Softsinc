// src/pages/InternshipDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import internshipsData from "../data/internshipsData";
import Hero2 from "../Components/layout/Hero2";
import bg from "../assets/Images/background.jpg";

const InternshipDetail = () => {
  const { slug } = useParams();
  const internship = internshipsData.find((intern) => intern.slug === slug);

  if (!internship) {
    return (
      <Hero2
        smallTitle="Internship Not Found"
        title="Oops! Internship not found"
        description="The internship you’re looking for does not exist or was removed."
        backgroundImage={bg}
        buttonText="Back to Internships"
        buttonLink="/internships"
      />
    );
  }

  return (
    <>
      <Hero2
        smallTitle="Internship"
        title={internship.title}
        description="Learn, grow, and kickstart your career with us."
        backgroundImage={bg}
        buttonText="Back to Internships"
        buttonLink="/internships"
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">{internship.title}</h1>
        <div className="text-gray-600 mb-6">
          <p><strong>Type:</strong> {internship.type}</p>
          <p><strong>Location:</strong> {internship.location}</p>
          <p><strong>Duration:</strong> {internship.duration}</p>
          <p><strong>Experience Required:</strong> {internship.experience}</p>
        </div>

        <p className="text-lg mb-6 text-gray-800">{internship.description}</p>

        {internship.responsibilities && (
          <>
            <h2 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {internship.responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </>
        )}

        {internship.requirements && (
          <>
            <h2 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {internship.requirements.map((req, idx) => (
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

export default InternshipDetail;
