// src/components/Mision.js
import React from 'react';
import './Preloader.css';

const Mision = () => {
  return (
    <div className="mission hidden">
      <div className="row full-width hidden" style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="text-content-mv">
          <h1 className="subtitle hidden">Misión</h1>
          <p id="text-content" className="hidden">
            Crear un sitio web que fomente el crecimiento y la visibilidad de las pequeñas y medianas empresas de la ciudad de Chihuahua...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
