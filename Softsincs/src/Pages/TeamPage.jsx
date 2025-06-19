// src/pages/TeamPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import teamData from '../data/teamData';
import Hero2 from "../Components/layout/Hero2"
import bgContact from '../assets/Images/background.jpg'; 
import Leadership from '../Components/layout/Leadership';
import DevelopmentTeam from '../Components/layout/DevelopmentTeam'; 
const TeamPage = () => {
  return (
<>
      <Hero2
        smallTitle="Team"
        title="Let's Connect and Collaborate"
        description="Whether you have a question, a project idea, or just want to say hello — we’d love to hear from you. Reach out and let's explore how we can create something great together."
        buttonText="Send a Message"
        buttonLink="/contact-form" // Optional: link to a dedicated contact form or section
        backgroundImage={bgContact}
      />
<Leadership />
<DevelopmentTeam />
    {/* <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {teamData.map(member => (
        <Link to={`/team/${member.id}`} key={member.id} className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-xl" />
          <h2 className="text-xl font-semibold mt-3">{member.name}</h2>
          <p className="text-gray-600">{member.role}</p>
        </Link>
      ))}
    </div> */}
</>
  );
};

export default TeamPage;
