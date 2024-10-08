import React from 'react';
import './Footer.css';
import logo from '../elements/Component 9applogo.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo CUU" />
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h4 className="quienes_somos">¿Quiénes somos?</h4>
            <ul>
              <li><a href="#mision" className="mision">Misión</a></li>
              <li><a href="#vision" className="vision">Visión</a></li>
              {/* <li><a href="#" className="roadmap">Roadmap</a></li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="contactanos">Contáctanos</h4>
            <ul>
              <li><a href="https://www.instagram.com/vamosalcentrocuu/" className="instagram">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61563901460352" className="facebook">Facebook</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61563901460352" className="x">X</a></li>
              <li><a href="mailto:vamosalcentrocuu@gmail.com" className="enviar_correo">Envíanos un correo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    
    );
    
    
};

export default Footer;