import React from "react";
import { useNavigate } from "react-router-dom";
import teamData from "../../data/teamData";

const Leadership = () => {
  const navigate = useNavigate();

  // Filter leadership roles (Advisor, Mentor, and all C-level roles)
  const leadershipMembers = teamData.filter((member) => {
    const role = member.role.toLowerCase();
    return (
      role.includes("advisor") ||
      role.includes("mentor") ||
      role.includes("chief")
    );
  });

  const handleClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <section className="py-10 text-gray-800 bg-gray-100">
      <div className="container flex flex-col items-center justify-center px-4 mx-auto space-y-8 sm:px-10">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">Leadership</h1>
        <p className="max-w-2xl text-center text-gray-600">
          Our leadership team is committed to excellence and innovation, leading the way in delivering impactful solutions and services.
        </p>

        {/* Leadership Members */}
        <div className="flex flex-row flex-wrap justify-center mt-10">
          {leadershipMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleClick(member.id)}
              className="flex flex-col items-center justify-center w-40 m-6 text-center transition-transform duration-300 cursor-pointer hover:scale-105"
            >
              <img
                alt={member.name}
                className="w-24 h-24 mb-4 bg-center bg-cover rounded-full shadow-md"
                src={member.image}
              />
              <p className="text-lg font-semibold leading-tight">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
