// src/components/Footer.jsx

import React from 'react';
import LogoImage from '../assets/LOGO.png'; 
// Importação simulada de ícones de mídia social (Exemplo: usando Font Awesome ou ícones próprios)
// import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Links de navegação: Adicionando links essenciais para um rodapé
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];
  
  // Links legais/utilitários
  const utilityLinks = [
    { name: 'Termos de Uso', href: '/terms' }, // URL estática, ajuste conforme a rota
    { name: 'Política de Privacidade', href: '/privacy' }, // URL estática, ajuste conforme a rota
    { name: 'Investidores', href: '#contact' }, // Direciona para o contato de investidor
  ];

  // Links de Mídias Sociais (Exemplo)
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/plantio', icon: 'fa-instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/plantio', icon: 'fa-linkedin' },
    // Adicione mais mídias se necessário
  ];


  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        
        {/* Coluna 1: Logo e Mídia Social (Aprimorado) */}
        <div className="footer-logo-col">
          <a href="#" aria-label="Voltar para o Início">
            <img 
              src={LogoImage} 
              alt="Logo Plant.io" 
              className="footer-logo-img" 
            />
          </a>
          <p className="footer-tagline">
            Tecnologia e Sustentabilidade para o Agronegócio.
          </p>
          
          {/* Adição de Mídias Sociais */}
          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Siga a Plant.io no ${social.name}`}
                className="social-icon-link"
              >
                {/* Aqui você usaria o componente de ícone real (ex: <FaInstagram />) */}
                <i className={social.icon}></i> 
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2: Navegação Principal (Mantida) */}
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
        
        {/* Coluna 3: Links Legais e Credibilidade (NOVA COLUNA) */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Legal & Info</h4>
          <ul className="footer-links-list">
            {utilityLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4: Fale Conosco (Aprimorado) */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">Fale Conosco</h4>
          <p className="footer-contact-item">
            **Email**
            <a href="mailto:plant.io102025@gmail.com" className="footer-link">
                plant.io102025@gmail.com
            </a>
          </p>
          <p className="footer-contact-item">
            **Telefone/WhatsApp**
            {/* O link "tel" e a formatação para WhatsApp melhoram a usabilidade móvel */}
            <a href="tel:+5585992200477" className="footer-link">
              (85) 99220-0477
            </a>
          </p>
        </div>
      </div>
      
      {/* Barra de Copyright (Aprimorado) */}
      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          Plant.io | &copy; {currentYear} Todos os direitos reservados.
        </p>
        <p className="footer-copyright-text footer-cnpj-info">
           PLANT.IO AGROTECNOLOGIA S.A. | CNPJ: XX.XXX.XXX/XXXX-XX (Exemplo)
        </p>
      </div>
    </footer>
  );
};

export default Footer;