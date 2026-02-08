import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email body
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `.trim();

      // Use mailto link as a fallback
      const mailtoLink = `mailto:support@softsincs.com?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
      
      // Try to open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-semibold mb-4">
            📧 Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's <span className="text-black">Connect</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-white border border-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <p className="text-black mb-8">
                Fill out our contact form and we'll get back to you within 24 hours. Let's discuss how we can help bring your ideas to life.
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">Office Location</h4>
                    <p className="text-black mt-1">Ghirnatah, Dammam, Saudi Arabia</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06l-1.55.77a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">Phone Number</h4>
                    <a href="tel:+966152255365" className="text-black hover:text-gray-600 mt-1 block font-medium transition-colors">
                      +966 1 5225 5365
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">Email Address</h4>
                    <a href="mailto:support@softsincs.com" className="text-black hover:text-gray-600 mt-1 block font-medium transition-colors">
                      support@softsincs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-black rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-3">
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
            <div className="bg-white border border-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/softsincs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:bg-gray-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/softsincs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:bg-gray-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/softsincs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:bg-gray-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border border-black rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-white border border-black rounded-xl flex items-start animate-fade-in">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-black font-semibold mb-1">Message Sent Successfully!</h4>
                    <p className="text-black text-sm">Your default email client should open. If not, please email us directly at support@softsincs.com</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-white border border-black rounded-xl flex items-start animate-fade-in">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-black font-semibold mb-1">Oops! Something went wrong</h4>
                    <p className="text-black text-sm">Please try again or email us directly at support@softsincs.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Full Name <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-white text-black border ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
                    } rounded-xl focus:outline-none focus:ring-2 transition-all placeholder-gray-400`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-black flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address <span className="text-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-white text-black border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
                    } rounded-xl focus:outline-none focus:ring-2 transition-all placeholder-gray-400`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-black flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Your Message <span className="text-black">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`w-full px-4 py-3 bg-white text-black border ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
                    } rounded-xl focus:outline-none focus:ring-2 transition-all resize-none placeholder-gray-400`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-black flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-gray-600 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
