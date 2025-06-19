import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

const mobileMenus = [
  {
    title: 'What We Do',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Technologies', to: '/technologies' },
    ],
  },
  {
    title: 'Who We Help',
    links: [
      { label: 'Startups', to: '/startups' },
      { label: 'Enterprises', to: '/enterprises' },
    ],
  },
  {
    title: 'Who We Are',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Leadership', to: '/leadership' },
    ],
  },
  {
    title: 'How We Deliver',
    links: [
      { label: 'Process', to: '/process' },
      { label: 'Quality Assurance', to: '/quality-assurance' },
    ],
  },
  {
    title: 'Join Softsinc',
    links: [
      { label: 'Careers', to: '/careers' },
      { label: 'Internships', to: '/internships' },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrolled(currentScrollTop > 10);

      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setExpandedMenu((prev) => (prev === index ? null : index));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'} text-white`}
    >
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Mobile Menu Button */}
        <div className="custom:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors rounded-md hover:bg-white/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="relative z-40 items-center hidden gap-8 font-medium custom:flex">
          {mobileMenus.map((menu, idx) => (
            <div key={idx} className="relative group">
              <button
                className="flex items-center gap-1 px-1 py-2 transition-colors duration-200 hover:text-white/80"
                type="button"
              >
                {menu.title}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-transparent shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 pointer-events-auto min-w-[200px] transform group-hover:translate-y-0 translate-y-1">
                <ul className="py-2">
                  {menu.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        className="block px-4 py-2 text-white transition-colors duration-200 rounded hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <Link 
            to="/contact" 
            className="px-4 py-2 text-white transition-colors duration-200 rounded-md bg-white/10 hover:bg-white/20"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="px-6 py-4 space-y-4 border-t shadow-lg border-white/10 custom:hidden bg-black/20 backdrop-blur-sm">
          {mobileMenus.map((menu, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleSubmenu(idx)}
                className="flex items-center justify-between w-full py-2 text-left transition-colors hover:text-white/80"
              >
                {menu.title}
                {expandedMenu === idx ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedMenu === idx && (
                <ul className="pl-4 mt-2 space-y-2 border-l-2 border-white/10">
                  {menu.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-1.5 text-white/80 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link
            to="/contact"
  className="block w-full text-center py-2.5 rounded-md mt-4 transition-colors bg-white text-blue-600 hover:bg-blue-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;