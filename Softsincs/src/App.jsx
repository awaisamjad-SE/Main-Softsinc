import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop';
import RouteChangePreloader from './routes/RouteChangePreloader';
import ParticleBackground from './components/common/ParticleBackground';

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
