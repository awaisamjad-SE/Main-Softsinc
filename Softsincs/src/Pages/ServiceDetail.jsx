import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import Hero2 from "../Components/layout/Hero2";
import bgServices from "../assets/Images/background.jpg"; // Use a relevant hero image

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Hero2
          smallTitle="Service Not Found"
          title="404 - Oops! This Service Doesn't Exist"
          description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          buttonText="Go to Home"
          buttonLink="/"
          backgroundImage={bgServices}
        />
        <div className="text-center py-20 text-red-600 font-semibold text-xl">
          Service not found
        </div>
      </>
    );
  }

  return (
    <div className="scroll-smooth">
      {/* Hero Banner */}
      <Hero2
        smallTitle="Our Services"
        title={service.title}
        description={service.summary || "Discover how we can help your business grow."}
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage={bgServices}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Image */}
        {service.bgImage && (
          <section aria-label="Service banner image" className="mb-10">
            <img
              src={service.bgImage}
              alt={`${service.title} banner`}
              className="w-full h-72 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          </section>
        )}

        {/* Title & Description */}
        <article className="mb-10">
          <h1 className="text-4xl font-extrabold text-[#2e35d7] mb-4">{service.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
        </article>

        {/* Summary */}
        {service.summary && (
          <section className="mb-10 border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-semibold mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{service.summary}</p>
          </section>
        )}

        {/* Benefits */}
        {service.benefits && (
          <section className="mb-10 border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              {service.benefits.map((item, index) => (
                <li key={index} className="flex items-center">
                  {/* Replace font-awesome icon with SVG check for better compatibility */}
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features */}
        {service.features && (
          <section className="mb-10 border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* If feature.icon is a string class, consider replacing with SVG or React Icon */}
                  <div
                    className={`text-4xl text-[#2e35d7] mb-4`}
                    aria-hidden="true"
                  >
                    {feature.icon ? <i className={feature.icon}></i> : null}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        {service.process && (
          <section className="mb-12 border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-semibold mb-6">Our Process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 leading-relaxed">
              {service.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Call To Action */}
        <section className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-[#2e35d7]">
            Ready to take the next step?
          </h3>
          <Link
            to="/contact"
            className="inline-block bg-[#2e35d7] hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}

export default ServiceDetail;
