import React from "react";
import { useNavigate } from "react-router-dom";
import teamData from "../../data/teamData";

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const Leadership = () => {
  const navigate = useNavigate();

  // Split CEO and others
  const ceo = teamData.find((member) =>
    member.role.toLowerCase().includes("chief executive officer")
  );
  const otherLeaders = teamData.filter(
    (member) =>
      member !== ceo &&
      member.role.toLowerCase().includes("chief") // Filter for C-level
  );

  const handleClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <section className="py-10 bg-gray-100 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-4 mx-auto space-y-8 sm:px-10">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">Leadership</h1>
        <p className="max-w-2xl text-center text-gray-600">
          Our leadership team is committed to excellence and innovation, leading the way in delivering impactful solutions and services.
        </p>

        {/* CEO Card */}
        {ceo && (
          <div
            onClick={() => handleClick(ceo.id)}
            className="cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center space-y-4 mt-10"
          >
            <img
              src={ceo.image}
              alt={ceo.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <p className="text-xl font-semibold">{ceo.name}</p>
              <p className="text-gray-600">{ceo.role}</p>
            </div>
          </div>
        )}

        {/* Other Leadership Members */}
        <div className="flex flex-row flex-wrap justify-center mt-10">
          {otherLeaders.map((member) => (
            <div
              key={member.id}
              onClick={() => handleClick(member.id)}
              className="cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center m-6 text-center w-40"
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
