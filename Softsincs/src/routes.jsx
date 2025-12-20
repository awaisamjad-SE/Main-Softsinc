// src/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Home Page Sections
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import BlogSection from './components/sections/BlogSection';
import TechStackSection from './components/sections/TechStackSection';
import KeyHighlights from './components/sections/KeyHighlights';
import Testimonials from './components/sections/Testimonials';
import ContactSection from './components/sections/ContactSection';
import './components/Dashboard'
// Standalone Pages
import NotFound from './pages/NotFound';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/ContactUs';
import TeamPage from './pages/TeamPage'; 
import TeamDetail from './pages/TeamDetail';
import ServicePage from './pages/ServicesPage'; 
import ProcessPage from './pages/ProcessPage';
import LeadershipPage from './pages/LeadershipPage';
import TechnologyPage from './pages/TechnologyPage';
import CareerPage from './pages/CareerPage';
import JobDetail from './pages/JobDetail';
import InternshipPage from "./pages/InternshipPage";
import InternshipDetail from "./pages/InternshipDetail";
import StartupPage from './pages/Startup';
import EnterprisesPage from './pages/Enterprises';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import SEO from './components/common/SEO';

// HomePage composed of multiple sections
const HomePage = () => (
  <>
    <SEO 
      title="Softsincs - Leading Software Development Company | Custom Solutions & Innovation"
      description="Softsincs is a premier software development company specializing in custom web applications, mobile apps, AI solutions, and enterprise software. Transform your business with cutting-edge technology."
      keywords="software development, web development, mobile app development, AI solutions, custom software, enterprise solutions, cloud services, digital transformation, technology consulting"
      url="https://softsincs.com"
    />
    <Hero />
    <Services />
    <WhyChooseUs />
    <BlogSection />
    <TechStackSection />
    <KeyHighlights />
    <Testimonials />
    <ContactSection />
  </>
);

// Wrapped Routes component
const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/about" element={<About />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/team/:id" element={<TeamDetail />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:slug" element={<BlogDetail />} />
    <Route path="/services" element={<ServicePage />} />
    <Route path="/process" element={<ProcessPage />} />
    <Route path="/leadership" element={<LeadershipPage />} />
    <Route path="/technology" element={<TechnologyPage />} />
    <Route path="/careers" element={<CareerPage />} />
    <Route path="/carrers/:slug" element={<JobDetail />} />
    <Route path="/internships" element={<InternshipPage />} />
    <Route path="/internship/:slug" element={<InternshipDetail />} />
    <Route path="/startups" element={<StartupPage />} />
    <Route path="/enterprises" element={<EnterprisesPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/sitemap" element={<Sitemap />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
