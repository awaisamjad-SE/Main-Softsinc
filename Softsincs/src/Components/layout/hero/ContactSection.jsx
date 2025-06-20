// src/Components/ContactSection.jsx

import React, { useState } from 'react';
import { saveContact } from '../../../data/contactData'; // adjust path as needed

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    saveContact(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-100 dark:text-gray-900">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        
        {/* Contact Info */}
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4 text-gray-600">Fill in the form to start a conversation with us.</p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>643 L Block, Sabzazar, Lahore</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06l-1.55.77a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+92(347) 3706598</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Softsincs@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1 text-sm font-medium">Full Name</span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Muhammad Ahmad"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </label>

          <label className="block">
            <span className="mb-1 text-sm font-medium">Email Address</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Muhammad@example.com"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </label>

          <label className="block">
            <span className="mb-1 text-sm font-medium">Message</span>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
            ></textarea>
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
          </label>
            <button
              type="submit"
              className="w-full py-3 bg-[#2e35d7] text-white font-semibold rounded-lg hover:bg-white hover:text-[#2e35d7] hover:border-2 border-[#2e35d7] transition duration-300"
            >
              Send Message
            </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
