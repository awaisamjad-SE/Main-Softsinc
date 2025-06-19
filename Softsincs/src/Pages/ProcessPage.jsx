import React from 'react';
import Process from '../Components/layout/Process';
import Hero2 from '../Components/layout/Hero2';
import Faq from '../Components/layout/hero/Faq';
import bgContact from '../assets/Images/background.jpg';

const processFaqs = [
  {
    question: 'What is the first step after I contact you?',
    answer:
      'Once you contact us, we schedule an initial consultation to understand your requirements, goals, and expectations before moving forward.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project duration depends on complexity, but we provide a clear timeline during the planning phase and keep you updated throughout.',
  },
  {
    question: 'Do you offer revisions during the development process?',
    answer:
      'Yes, we offer multiple revision cycles to ensure that the final product aligns perfectly with your vision and business needs.',
  },
  {
    question: 'Will I be involved in each stage of development?',
    answer:
      'Absolutely! We keep you informed and involved through regular updates, feedback loops, and milestone reviews.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we provide post-launch support, maintenance, and additional feature development based on your needs.',
  },
];

const ProcessPage = () => {
  return (
    <>
      <Hero2
        smallTitle="Our Process"
        title="Let’s Build Something Great Together"
        description="From idea to execution, discover how we turn your vision into scalable digital solutions through our refined process."
        buttonText="Start a Project"
        buttonLink="/contact-form"
        backgroundImage={bgContact}
      />

      <div className="bg-white text-gray-800">
        {/* Page Header */}
        <header className="text-center py-16 bg-gradient-to-r from-indigo-100 via-white to-indigo-50">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 drop-shadow-sm">
            How We Work
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
            A streamlined process that ensures quality and client satisfaction every step of the way.
          </p>
        </header>

        {/* Process Timeline */}
        <Process />

        {/* FAQ Section */}
        <Faq
          title="Process FAQs"
          description="Have questions about how we work? Find answers here."
          faqs={processFaqs}
        />

        {/* Call to Action */}
        <div className="text-center py-10 px-4 bg-indigo-50">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 mb-6">Let's collaborate and bring your vision to life.</p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default ProcessPage;
