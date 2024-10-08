// src/components/Preloader.js
import './Preloader.css';
import React, { useEffect, useState } from 'react';


const Preloader = () => {
  const [loaded, setLoaded, setLoading] = useState(false);

  useEffect(() => {
    const totalDuration = 10000;

    const handleLoadComplete = () => {
      setLoaded(false);
      document.body.classList.remove('loading');
      // Eliminar las clases 'hidden' para evitar el blur
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach(element => element.classList.remove('hidden'));
      // Forzar actualización
      window.dispatchEvent(new Event('resize'));
    };
    

    const handleAnimationEnd = () => {
      setTimeout(() => {
        document.body.classList.add('loaded');
        setLoaded(true);
      }, 1000);
    };

    const container = document.querySelector('.container div');
    if (container) {
      container.addEventListener('animationend', handleAnimationEnd);
    }

    const timeoutId = setTimeout(() => {
      if (!document.body.classList.contains('loaded')) {
        document.body.classList.add('loaded');
        setLoaded(true);
      }
    }, totalDuration);

    return () => {
      clearTimeout(timeoutId);
      if (container) {
        container.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div id="preloader" className={loaded ? 'loaded' : ''}>
      <div className="title">
        <h1>¿Vamos al centro</h1>
        <div className="containerGradient">
          <div className="container">
            <div>
              <h1 className="textoSlider"><a>CUU?</a></h1>
              <h1 className="textoSlider"><a>Café?</a></h1>
              <h1 className="textoSlider"><a>Bar?</a></h1>
              <h1 className="textoSlider"><a>Cultural?</a></h1>
              <h1 className="textoSlider"><a>Restaurante?</a></h1>
            </div>
            <div>
              <h1 className="textoSlider"><a>CUU?</a></h1>
              <h1 className="textoSlider"><a>Café?</a></h1>
              <h1 className="textoSlider"><a>Bar?</a></h1>
              <h1 className="textoSlider"><a>Cultural?</a></h1>
              <h1 className="textoSlider"><a>Restaurante?</a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
