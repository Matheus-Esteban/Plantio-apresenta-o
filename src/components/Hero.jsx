// src/components/Hero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button'; 
import Graficos from '../assets/GRAFICOS.png'; 
import Icones from '../assets/ICONES.png';   
import Tomates from '../assets/TOMATES.png'; 

const Hero = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goToNext = () => {
    goToSlide((currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
  };

  const goToPrev = () => {
    goToSlide((currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); 

    return () => clearInterval(interval);
  }, [currentSlide]); 

  const current = slides[currentSlide];

  return (
    <section className="hero-section"> 
      <div className="carousel-container">
        
        {slides.map((slide, index) => (
            <div 
                key={index} 
                role="presentation"
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
                <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="slide-background"
                />
                <div className="slide-overlay"></div>
            </div>
        ))}
        
        <div className="hero-content" role="banner">
            <h1 className="hero-title">
              {current.title}
            </h1>
            
            <p className="hero-subtitle">
              {current.subtitle}
            </p>
            
            <div className="cta-buttons-container">
                <Button primary={true} href="#contact">Solicitar Orçamento</Button> 
                <Button primary={false} href="#about">Nossos Projetos</Button> 
            </div>
        </div>

        <div className="carousel-controls">
            <button 
                className="control-button prev-button" 
                onClick={goToPrev}
                aria-label="Slide anterior"
            >
                &lsaquo;
            </button>
            <button 
                className="control-button next-button" 
                onClick={goToNext}
                aria-label="Próximo slide"
            >
                &rsaquo;
            </button>
        </div>
        
        <div className="carousel-indicators">
            {slides.map((_, index) => (
                <button 
                    key={index}
                    className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para o slide ${index + 1}`}
                    aria-current={index === currentSlide ? 'true' : 'false'}
                />
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default Hero;