import React, { useState } from "react";

const ContactSection = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeCTy_otfq3-1HMWEG075-vM2cThXd3rr03M4aRJmI3-k8ChA/viewform?embedded=true";
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormToggle = () => {
    setShowForm((prev) => !prev);
    if (!showForm) {
      // Scroll to form when opening
      setTimeout(() => {
        document.getElementById('contact-form-container')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="card-gradient">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Fill out our contact form and we'll get back to you within 24 hours. 
                Let's discuss how we can help bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Office Location</h4>
                    <p className="text-gray-600 mt-1">Ghirnatah, Dammam, Saudi Arabia</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center group-hover:bg-secondary-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06l-1.55.77a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone Number</h4>
                    <a href="tel:+966152255365" className="text-secondary-600 hover:text-secondary-700 mt-1 block font-medium">
                      +966 1 5225 5365
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center group-hover:bg-accent-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email Address</h4>
                    <a href="mailto:Softsincs@gmail.com" className="text-accent-600 hover:text-accent-700 mt-1 block font-medium">
                      Softsincs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/softsincs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/softsincs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-600 text-white rounded-full flex items-center justify-center hover:bg-secondary-700 transition-colors transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/softsincs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-600 text-white rounded-full flex items-center justify-center hover:bg-accent-700 transition-colors transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form-container" className="lg:sticky lg:top-24">
            <div className="card bg-white">
              <button
                onClick={handleFormToggle}
                className="w-full py-4 px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${showForm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>{showForm ? "Hide Contact Form" : "Open Contact Form"}</span>
              </button>

              {showForm && (
                <div className="mt-6 animate-fade-in-up">
                  <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200\">
                    <p className="text-sm text-gray-600 flex items-start\">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span>Please fill out all required fields. We'll respond within 24 hours.</span>
                    </p>
                  </div>

                  <div className="relative" style={{ minHeight: '600px' }}>
                    <iframe
                      src={googleFormLink}
                      title="Contact Form"
                      className="w-full h-[600px] border-0 rounded-lg"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                    >
                      Loading form...
                    </iframe>
                  </div>

                  <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                    <p className="text-sm text-primary-800">
                      <strong>💡 Quick Response:</strong> For urgent inquiries, call us directly at 
                      <a href="tel:+966152255365" className="font-bold ml-1 hover:text-primary-600">+966 1 5225 5365</a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



// // src/Components/ContactSection.jsx

// import React, { useState } from 'react';
// import { saveContact } from '../../../data/contactData'; // adjust path as needed

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     saveContact(formData);
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//     setErrors({});
//   };

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-100 dark:text-gray-900">
//       <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        
//         {/* Contact Info */}
//         <div className="py-6 md:py-0 md:px-6">
//           <h1 className="text-4xl font-bold">Get in touch</h1>
//           <p className="pt-2 pb-4 text-gray-600">Fill in the form to start a conversation with us.</p>
//           <div className="space-y-4 text-gray-700">
//             <p className="flex items-center">
//               <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//               </svg>
//               <span>643 L Block, Sabzazar, Lahore</span>
//             </p>
//             <p className="flex items-center">
//               <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06l-1.55.77a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//               </svg>
//               <span>+92(347) 3706598</span>
//             </p>
//             <p className="flex items-center">
//               <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//               <span>Softsincs@gmail.com</span>
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
//           <label className="block">
//             <span className="mb-1 text-sm font-medium">Full Name</span>
//             <input
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Muhammad Ahmad"
//               className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
//             />
//             {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
//           </label>

//           <label className="block">
//             <span className="mb-1 text-sm font-medium">Email Address</span>
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Muhammad@example.com"
//               className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
//             />
//             {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
//           </label>

//           <label className="block">
//             <span className="mb-1 text-sm font-medium">Message</span>
//             <textarea
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message here..."
//               className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
//             ></textarea>
//             {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
//           </label>
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#2e35d7] text-white font-semibold rounded-lg hover:bg-white hover:text-[#2e35d7] hover:border-2 border-[#2e35d7] transition duration-300"
//             >
//               Send Message
//             </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

