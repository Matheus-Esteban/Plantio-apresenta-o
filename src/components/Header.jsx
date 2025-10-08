// src/components/Header.jsx

import Button from './Button'; 
import LogoImage from '../assets/LOGO.png'; // 👈 Importa sua logo

const Header = () => {
  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    // [AJUSTADO] Link 'Projetos' agora aponta para a seção de fundo de milho
    { name: 'Projetos', href: '#product-focus' }, 
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* Substituição do Texto pela Imagem da Logo */}
        <a href="#" className="header-logo-link">
          <img 
            src={LogoImage} 
            alt="Logo Plant.io" 
            className="header-logo-img" 
          />
        </a>
        
        {/* Navegação Principal */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Botão de Chamada para Ação (CTA) */}
        <div className="header-cta">
          {/* [AJUSTADO] Link Fale Conosco aponta para a seção #contact */}
          <Button primary={true} href="#contact">Fale Conosco</Button> 
        </div>
      </div>
    </header>
  );
};

export default Header;