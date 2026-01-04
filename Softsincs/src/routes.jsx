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
import './Components/Dashboard.jsx';
// Standalone Pages
import NotFound from './Pages/NotFound.jsx';
import About from './Pages/About.jsx';
import ServiceDetail from './Pages/ServiceDetail.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import BlogDetail from './Pages/BlogDetail.jsx';
import Contact from './Pages/ContactUs.jsx';
import TeamPage from './Pages/TeamPage.jsx'; 
import TeamDetail from './Pages/TeamDetail.jsx';
import ServicePage from './Pages/ServicesPage.jsx'; 
import ProcessPage from './Pages/ProcessPage.jsx';
import LeadershipPage from './Pages/LeadershipPage.jsx';
import TechnologyPage from './Pages/TechnologyPage.jsx';
import CareerPage from './Pages/CareerPage.jsx';
import JobDetail from './Pages/JobDetail.jsx';
import InternshipPage from "./Pages/InternshipPage.jsx";
import InternshipDetail from "./Pages/InternshipDetail.jsx";
import StartupPage from './Pages/Startup.jsx';
import EnterprisesPage from './Pages/Enterprises.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import TermsOfService from './Pages/TermsOfService.jsx';
import Sitemap from './Pages/Sitemap.jsx';
import SEO from './Components/Common/SEO.jsx';

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
