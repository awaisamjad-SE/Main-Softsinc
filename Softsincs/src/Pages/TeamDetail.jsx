import React from 'react';
import { useParams, Link } from 'react-router-dom';
import teamData from '../data/teamData';
import Hero2 from "../Components/layout/Hero2";
import bgContact from '../assets/Images/background.jpg';

const TeamDetail = () => {
  const { id } = useParams();
  const member = teamData.find(m => m.id === id);

  if (!member) {
    return (
<>
   <Hero2
        smallTitle="Team Details"
        title="Let's Connect and Collaborate"
        description="Whether you have a question, a project idea, or just want to say hello — we’d love to hear from you. Reach out and let's explore how we can create something great together."
        buttonText="Send a Message"
        buttonLink="/contact-form"
        backgroundImage={bgContact}
      />
<div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Team member not found</h1>
        <Link to="/team" className="text-blue-600 hover:underline text-lg">
          ← Back to Team
        </Link>
      </div>
</>
      
    );
  }

  return (
    <>
      <Hero2
        smallTitle="Team Details"
        title="Let's Connect and Collaborate"
        description="Whether you have a question, a project idea, or just want to say hello — we’d love to hear from you. Reach out and let's explore how we can create something great together."
        buttonText="Send a Message"
        buttonLink="/contact-form"
        backgroundImage={bgContact}
      />

      <main className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row md:items-center md:space-x-12 p-8 md:p-12">
          {/* Member Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0 w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-500 dark:ring-indigo-400">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Member Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{member.name}</h1>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-4">{member.role}</p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{member.bio}</p>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Skills</h2>
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                {member.skills.map(skill => (
                  <li
                    key={skill}
                    className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Social Links */}
            {(member.email || member.twitter || member.linkedin || member.github) && (
              <section className="mt-8 flex justify-center md:justify-start space-x-6">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
                      <path d="M22 4l-10 7L2 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.67 0c-2.5 0-4.52 2.03-4.52 4.53 0 .36.04.7.12 1.03A12.83 12.83 0 013 1.64a4.52 4.52 0 001.4 6.05 4.48 4.48 0 01-2.05-.57v.06c0 2.17 1.54 3.98 3.58 4.39a4.5 4.5 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.7 12.7 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.42-.02-.63A9.3 9.3 0 0023 3z" />
                    </svg>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.64 1.33 2.98 2.98 2.98 1.64 0 2.97-1.34 2.97-2.98 0-1.65-1.33-2.98-2.97-2.98zM2 21.5h6v-12h-6v12zm7-12h5.5v1.7h.08c.77-1.46 2.66-3 5.48-3 5.86 0 6.94 3.86 6.94 8.89v10.41h-6v-9.22c0-2.2-.04-5.04-3.07-5.04-3.07 0-3.54 2.4-3.54 4.88v9.38h-6v-12z" />
                    </svg>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.74.08-.74a2.52 2.52 0 011.83 1.23 2.55 2.55 0 003.48 1 2.55 2.55 0 01.76-1.6c-2.67-.3-5.47-1.34-5.47-5.97a4.68 4.68 0 011.24-3.25 4.35 4.35 0 01.12-3.2s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.35 4.35 0 01.12 3.2 4.68 4.68 0 011.24 3.25c0 4.64-2.8 5.67-5.48 5.97a2.85 2.85 0 01.82 2.22v3.3c0 .32.22.7.82.58A12 12 0 0012 0z" />
                    </svg>
                  </a>
                )}
              </section>
            )}

            {/* Back Link */}
            <div className="mt-10">
              <Link
                to="/team"
                className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                ← Back to Team
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TeamDetail;
