import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import Hero2 from "../Components/layout/Hero2";
import bgServices from "../assets/Images/background.jpg";
import Process from "../Components/layout/Process";

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

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-14">

        {/* Title & Description */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e35d7] mb-4">{service.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
        </section>

        {/* Summary */}
        {service.summary && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-800 leading-relaxed">{service.summary}</p>
          </section>
        )}

        {/* Benefits */}
        {service.benefits?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-800 list-disc list-inside">
              {service.benefits.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <svg className="w-5 h-5 mt-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features */}
        {service.features?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                  <div className="text-3xl text-[#2e35d7] mb-3">
                    {feature.icon ? <i className={feature.icon}></i> : <i className="fas fa-star"></i>}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.label}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
<Process/>
        {/* CTA */}
        <div className="text-center mt-12 bg-[#f9f9ff] py-12 rounded-lg shadow-inner">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2e35d7]">
            Ready to take the next step?
          </h3>
          <Link
            to="/contact"
            className="inline-block bg-[#2e35d7] hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ServiceDetail;
