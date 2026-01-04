import React from 'react';
import Navbar from './components/layout/Navbar/Navbar.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import AppRoutes from './routes';
import ScrollToTop from './components/Common/ScrollToTop.jsx';
import RouteChangePreloader from './routes/RouteChangePreloader.jsx';
import ParticleBackground from './components/Common/ParticleBackground.jsx';

function App() {
  return (
    <>
      <ParticleBackground />
      <RouteChangePreloader />
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
