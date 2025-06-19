// src/Components/Common/RouteChangePreloader.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Components/layout/Preloader';

const RouteChangePreloader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Change delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Preloader /> : null;
};

export default RouteChangePreloader;
