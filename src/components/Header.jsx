// src/components/Header.jsx
import React, { useState } from 'react';
import Button from './Button'; 
import LogoImage from '../assets/LOGO.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Projetos', href: '#product-focus' }, 
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        
        <a href="#" className="header-logo-link" onClick={closeMenu}>
          <img 
            src={LogoImage} 
            alt="Logo Plant.io" 
            className="header-logo-img" 
          />
        </a>

        <button 
          className="menu-toggle-button"
          onClick={toggleMenu}
          aria-controls="main-navigation" 
          aria-expanded={isMenuOpen} 
        >
          {isMenuOpen ? '✕' : '☰'} 
        </button>
        
        <nav 
          className={`header-nav ${isMenuOpen ? 'is-open' : ''}`} 
          id="main-navigation" 
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={closeMenu} 
            >
              {link.name}
            </a>
          ))}
          
          <div className="header-cta mobile-cta">
            <Button 
              primary={true} 
              href="#contact" 
              onClick={closeMenu} 
              isLink={true} 
            >
                Fale Conosco
            </Button> 
          </div>
        </nav>
        
        <div className="header-cta desktop-cta">
          <Button primary={true} href="#contact">Fale Conosco</Button> 
        </div>
      </div>
    </header>
  );
};

export default Header;