// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import Button from './Button'; 
// Importe as imagens do carrossel (ajuste os nomes dos arquivos se necessário)
import Graficos from '../assets/GRAFICOS.png'; 
import Icones from '../assets/ICONES.png';   
import Tomates from '../assets/TOMATES.png'; 

const Hero = () => {
  
  // Configuração dos slides com suas mensagens
  const slides = [
    {
      image: Graficos,
      title: "Insights que Impulsionam o Lucro.",
      subtitle: "Transformamos dados rurais em decisões estratégicas para alta eficiência.",
    },
    {
      image: Icones,
      title: "Gestão Integrada, Simples e Completa.",
      subtitle: "Monitore clima, ativos e colheitas em um único painel intuitivo.",
    },
    {
      image: Tomates,
      title: "Rastreabilidade e Otimização Total.",
      subtitle: "Maximize cada ciclo de produção com tecnologia de ponta.",
    },
  ];

  // Estado para rastrear o slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efeito para transição automática a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide === slides.length - 1 ? 0 : prevSlide + 1)
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide]; // Slide atual

  return (
    // Adicionado 'relative' para o container do carrossel ser o ponto de referência para os overlays
    <section className="hero-section"> 
      <div className="carousel-container">
        
        {/* Renderiza todos os slides (Camada de Imagens) */}
        {slides.map((slide, index) => (
            <div 
                key={index} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                // Removida a estilização 'style' inline. Use CSS para melhor performance.
            >
                <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="slide-background"
                />
                
                {/* CAMADA DE SOBREPOSIÇÃO ESCURA: Essencial para contraste e legibilidade do texto. */}
                {/* O estilo desta div deve ser configurado no CSS (veja o próximo passo). */}
                <div className="slide-overlay"></div>
            </div>
        ))}
        
        {/* Conteúdo (Título, Subtítulo, CTAs) Centralizado sobre o carrossel */}
        <div className="hero-content">
            <h1 className="hero-title">
              {current.title}
            </h1>
            
            <p className="hero-subtitle">
              {current.subtitle}
            </p>
            
            {/* CONTAINER PARA ALINHAMENTO DOS BOTÕES (Usado para aplicar Flexbox) */}
            <div className="cta-buttons-container">
                {/* Botão Primário: Sólido, Verde (Destaque Principal) */}
                <Button primary={true} href="#contact">Solicitar Orçamento</Button> 
                
                {/* Botão Secundário: Outline/Ghost, Transparente com Borda Branca (Destaque Secundário) */}
                {/* OBS: O componente Button deve ter lógica para renderizar o estilo 'outline' quando primary=false. */}
                <Button primary={false} href="#about">Nossos Projetos</Button> 
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;