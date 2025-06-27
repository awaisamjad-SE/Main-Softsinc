// src/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Home Page Sections
import Hero from './Components/layout/hero/Hero';
import Services from './Components/layout/hero/Services';
import WhyChooseUs from './Components/layout/hero/WhyChooseUs';
import BlogSection from './Components/layout/hero/BlogSection';
import TechStackSection from './Components/layout/hero/TechStackSection';
import KeyHighlights from './Components/layout/hero/KeyHighlights';
import Testimonials from './Components/layout/hero/Testimonials';
import ContactSection from './Components/layout/hero/ContactSection';
import './Components/Dashboard'
// Standalone Pages
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import ServiceDetail from './Pages/ServiceDetail';
import BlogPage from './Pages/BlogPage';
import BlogDetail from './Pages/BlogDetail';
import Contact from './Pages/ContactUs';
import TeamPage from './Pages/TeamPage'; 
import TeamDetail from './Pages/TeamDetail';
import ServicePage from './Pages/ServicesPage'; 
import ProcessPage from './Pages/ProcessPage';
import LeadershipPage from './Pages/LeadershipPage';
import TechnologyPage from './Pages/TechnologyPage';
import CareerPage from './Pages/CareerPage';
import JobDetail from './Pages/JobDetail';
import InternshipPage from "./Pages/InternshipPage";
import InternshipDetail from "./Pages/InternshipDetail";
import StartupPage from './Pages/Startup';
import EnterprisesPage from './Pages/Enterprises';
// HomePage composed of multiple sections
const HomePage = () => (
  <>
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
    {/* Dashboard Route */}

    
    <Route path="*" element={<NotFound />} />
    
  </Routes>
);

export default AppRoutes;
