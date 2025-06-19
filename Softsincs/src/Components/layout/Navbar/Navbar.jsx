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
    title: 'Join Devsinc',
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

  // Detect scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrolled(currentScrollTop > 50);

      if (currentScrollTop > lastScrollTop.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
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

  const navStyle = scrolled
    ? 'bg-[#e4e7ff] text-[#2e35d7]'
    : 'bg-transparent text-white';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out transform ${
        navStyle
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center justify-between px-4 py-1 mx-auto max-w-7xl">
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile Menu Button */}
        <div className="custom:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-inherit"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="relative z-40 hidden gap-8 font-medium custom:flex">
          {mobileMenus.map((menu, idx) => (
            <div key={idx} className="relative group">
              <button
                className="flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
                type="button"
              >
                {menu.title}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div className="absolute left-0 top-full mt-2 bg-white shadow rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 pointer-events-auto min-w-[160px]">
                <ul className="py-2">
                  {menu.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        className="block px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="px-6 py-4 space-y-4 text-gray-800 bg-white border-t shadow-lg custom:hidden">
          {mobileMenus.map((menu, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleSubmenu(idx)}
                className="flex items-center justify-between w-full font-semibold text-left"
              >
                {menu.title}
                {expandedMenu === idx ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedMenu === idx && (
                <ul className="pl-4 mt-2 space-y-2">
                  {menu.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-600 transition hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
