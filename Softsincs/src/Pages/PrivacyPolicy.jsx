import React from 'react';
import SEO from '../components/common/SEO';
import Hero2 from '../components/sections/Hero2';
import bg from '../assets/Images/background.jpg';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Softsincs | Your Data Protection & Privacy Rights"
        description="Read Softsincs' Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities."
        keywords="privacy policy, data protection, GDPR compliance, user privacy, data security, personal information"
        url="https://softsincs.com/privacy-policy"
      />
      
      <Hero2
        smallTitle="Privacy Policy"
        title="Your Privacy Matters to Us"
        description="Last Updated: December 13, 2025"
        backgroundImage={bg}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Softsincs ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, and mailing address</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products and services</li>
              <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-white text-gray-800 p-6 rounded-lg border border-gray-200">
              <p className="mb-2"><strong>Email:</strong> privacy@softsincs.com</p>
              <p className="mb-2"><strong>Website:</strong> https://softsincs.com/contact</p>
              <p><strong>Address:</strong> Softsincs, Pakistan</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
