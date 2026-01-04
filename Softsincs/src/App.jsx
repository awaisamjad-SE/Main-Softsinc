import React from 'react';
import Navbar from './components/layout/navbar/Navbar.jsx';
import Footer from './components/layout/footer/Footer.jsx';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import RouteChangePreloader from './routes/RouteChangePreloader.jsx';
import ParticleBackground from './components/common/ParticleBackground.jsx';

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
