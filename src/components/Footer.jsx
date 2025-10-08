// src/components/Footer.jsx (SEM ALTERAÇÕES NO JSX, SOMENTE REPETINDO PARA CONTEXTO)

import React from 'react';
import LogoImage from '../assets/LOGO.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        
        <div className="footer-logo-col">
          <img 
            src={LogoImage} 
            alt="Logo Plant.io" 
            className="footer-logo-img" 
          />
          <p className="footer-tagline">
            Tecnologia e Sustentabilidade para o Agronegócio.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Navegação</h4>
          <ul className="footer-links-list">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-heading">Fale Conosco</h4>
          <p className="footer-contact-item">
            <a href="mailto:contato@plantio.com.br" className="footer-link">
                plant.io102025@gmail.com
            </a>
          </p>
          <p className="footer-contact-item">
            (85) 99220-0477
          </p>
          
        </div>
      </div>
      
      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          &copy; {currentYear} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;