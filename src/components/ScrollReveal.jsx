// src/components/ScrollReveal.jsx

import React, { useRef, useEffect, useState } from 'react';

// Aprimoramento: Adiciona props para customização
const ScrollReveal = ({ 
  children, 
  threshold = 0.1, // Permite definir a porcentagem de visibilidade
  delay = 0,       // Permite adicionar um atraso na animação (útil para listas)
  className = '',  // Permite adicionar classes externas de estilo
  once = true,     // Define se a animação deve acontecer apenas uma vez
}) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  // Função centralizada para lidar com a visibilidade
  const handleIntersection = (entries, observer) => {
    // Se o elemento estiver visível
    if (entries[0].isIntersecting) {
      setIsVisible(true);
      
      // Se a animação deve ocorrer apenas UMA VEZ, para de observar
      if (once) {
        observer.unobserve(domRef.current);
      }
    } else if (!once) {
      // Se não for 'once', permite que a animação seja revertida quando o elemento sai
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Usa o 'threshold' customizado
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: threshold 
    }); 

    const currentElement = domRef.current;
    
    if (currentElement) {
        observer.observe(currentElement);
    }

    return () => {
      // Garante que o observador seja desconectado na desmontagem
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, once]); // Adiciona dependências para o useEffect

  return (
    <div 
      className={`scroll-reveal-container ${className} ${isVisible ? 'is-visible' : ''}`} 
      ref={domRef}
      // Adiciona estilo inline para o delay da animação
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {children}
    </div>
  );
};

export default ScrollReveal;