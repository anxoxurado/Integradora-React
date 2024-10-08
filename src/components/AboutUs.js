// src/components/AboutUs.js
import React from 'react';
import './Preloader.css';
import brandingLogo from '../elements/Component 9applogo.png';

const AboutUs = () => {
  return (
    <div className="aboutus hidden">
      <div className="row full-width hidden" style={{ marginLeft: 0, marginRight: 0 }}>
        <h1 className="subtitle hidden" style={{ marginTop: '5vw' }}>Sobre Nosotros</h1>
        <div className="text-content">
          <p id="text-content">
            El proyecto "Vamos al centro CUU” tiene como objetivo desarrollar un sitio web que impulse el comercio local en la ciudad de Chihuahua...
          </p>
          <img src={brandingLogo} alt="App logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
