// src/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Home Page Sections
import Hero from './components/sections/Hero.jsx';
import Services from './components/sections/Services.jsx';
import WhyChooseUs from './components/sections/WhyChooseUs.jsx';
import BlogSection from './components/sections/BlogSection.jsx';
import TechStackSection from './components/sections/TechStackSection.jsx';
import KeyHighlights from './components/sections/KeyHighlights.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import './components/Dashboard.jsx';
// Standalone Pages
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Contact from './pages/ContactUs.jsx';
import TeamPage from './pages/TeamPage.jsx'; 
import TeamDetail from './pages/TeamDetail.jsx';
import ServicePage from './pages/ServicesPage.jsx'; 
import ProcessPage from './pages/ProcessPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import TechnologyPage from './pages/TechnologyPage.jsx';
import CareerPage from './pages/CareerPage.jsx';
import JobDetail from './pages/JobDetail.jsx';
import InternshipPage from "./pages/InternshipPage.jsx";
import InternshipDetail from "./pages/InternshipDetail.jsx";
import StartupPage from './pages/Startup.jsx';
import EnterprisesPage from './pages/Enterprises.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import Sitemap from './pages/Sitemap.jsx';
import SEO from './components/common/SEO.jsx';

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
