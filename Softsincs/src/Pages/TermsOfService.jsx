import React from 'react';
import SEO from '../components/common/SEO';
import Hero2 from '../components/sections/Hero2';
import bg from '../assets/Images/background.jpg';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Softsincs | Legal Terms & Conditions"
        description="Read Softsincs' Terms of Service to understand the rules and regulations for using our website and services. Learn about your rights and responsibilities."
        keywords="terms of service, terms and conditions, legal terms, service agreement, user agreement"
        url="https://softsincs.com/terms-of-service"
      />
      
      <Hero2
        smallTitle="Terms of Service"
        title="Terms & Conditions"
        description="Last Updated: December 13, 2025"
        backgroundImage={bg}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Softsincs' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on Softsincs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on Softsincs' website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Softsincs provides custom software development services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>AI and machine learning solutions</li>
              <li>Enterprise software solutions</li>
              <li>Cloud services and deployment</li>
              <li>Technology consulting</li>
              <li>Digital transformation services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content included on this site, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Softsincs or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Softsincs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For custom development projects:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Quotes are valid for 30 days unless otherwise specified</li>
              <li>Payment terms will be specified in individual project agreements</li>
              <li>Milestone-based payments may be required for larger projects</li>
              <li>All payments are non-refundable unless specified in the project agreement</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Project Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to meet all project deadlines. However, delivery timelines are estimates and may be subject to change based on project complexity, client feedback cycles, and unforeseen circumstances. We will communicate any delays promptly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Softsincs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Softsincs' website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Warranty Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Softsincs' website are provided "as is". Softsincs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Softsincs reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white text-gray-800 p-6 rounded-lg border border-gray-200">
              <p className="mb-2"><strong>Email:</strong> legal@softsincs.com</p>
              <p className="mb-2"><strong>Website:</strong> https://softsincs.com/contact</p>
              <p><strong>Address:</strong> Softsincs, Pakistan</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default TermsOfService;
