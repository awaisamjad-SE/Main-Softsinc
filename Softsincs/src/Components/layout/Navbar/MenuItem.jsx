import React, { useState, useRef, useEffect } from 'react';

const MenuItem = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change to 0 if you want it to happen immediately
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative group cursor-pointer">
      <button
        className={`flex items-center gap-1 focus:outline-none transition-colors duration-300 ${
          scrolled ? 'text-[#2e35d7]' : 'text-white'
        } hover:text-blue-300`}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {title}
        <svg
          className={`w-4 h-4 transform transition ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
