// src/components/CardList.js
import React from 'react';
import './Preloader.css';

import fondoCards from '../elements/fondo-cards-integrantes.jpg';

const CardList = () => {
  return (
    <div className="card-list hidden">
      <div className="card-item">
        <div className="gradient-card g-orange"></div>
        <img src={fondoCards} className="local-image" alt="" />
        <div className="card-info">
          <h2 className="local-name">Luis Baca</h2>
          <p className="local-description"><span id="cat1">Desarrollador Front-End</span></p>
        </div>
      </div>
      <div className="card-item">
        <div className="gradient-card g-blue"></div>
        <img src={fondoCards} className="local-image" alt="" />
        <div className="card-info">
          <h2 className="local-name">Raúl Cano</h2>
          <p className="local-description"><span id="cat1">Desarrollador Full-stack</span></p>
        </div>
      </div>
      <div className="card-item">
        <div className="gradient-card g-blue"></div>
        <img src={fondoCards} className="local-image" alt="" />
        <div className="card-info">
          <h2 className="local-name">Angel Jurado</h2>
          <p className="local-description"><span id="cat1">Desarrollador Front-End</span></p>
        </div>
      </div>
      <div className="card-item">
        <div className="gradient-card g-orange"></div>
        <img src={fondoCards} className="local-image" alt="" />
        <div className="card-info">
          <h2 className="local-name">Walter Gonzalez</h2>
          <p className="local-description"><span id="cat1">Desarrollador Project Manager</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default CardList;
