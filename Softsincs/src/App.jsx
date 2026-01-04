import React from 'react';
import Navbar from './Components/layout/Navbar/Navbar.jsx';
import Footer from './Components/layout/Footer/Footer.jsx';
import AppRoutes from './routes';
import ScrollToTop from './Components/Common/ScrollToTop.jsx';
import RouteChangePreloader from './routes/RouteChangePreloader.jsx';
import ParticleBackground from './Components/Common/ParticleBackground.jsx';

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
