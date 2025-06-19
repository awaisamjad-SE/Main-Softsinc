import React from 'react';
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer/Footer';
import AppRoutes from './routes';
import ScrollToTop from './Components/Common/ScrollToTop';
import RouteChangePreloader from '../src/routes/RouteChangePreloader'; 

function App() {
  return (
    <>
      <RouteChangePreloader />
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
