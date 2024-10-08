import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs';
import Mision from './Mision';
import Vision from './Vision';
import CardList from './CardList';
import Preloader from './Preloader';
import Footer from './Footer';
import './Preloader.css';

import headerImg from '../elements/drone.jpeg';
import gradientImg from '../elements/Gradiente purpura.png';

const MainContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    document.body.classList.remove('loading');
  };

  return (
    <>
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      <div id="main-content" className={loading ? 'hidden' : ''}>
        <div className="imagen-container">
          <div className="gradiente">
            <img src={headerImg} alt="top_image" className="imagen-principal" id="imagen-principal" />
            <img src={gradientImg} className="degradado" alt="degradado" />
          </div>
          <div className="degradado-container">
            <h1 className="titulo hidden">Conoce a tu guía local para explorar lo mejor de Chihuahua</h1>
          </div>
        </div>

        <AboutUs />
        <Mision />
        <Vision />
        <CardList />
        <Footer />
      </div>
    </>
  );
};

export default MainContent;