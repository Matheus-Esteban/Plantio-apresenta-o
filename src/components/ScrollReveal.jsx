// src/components/ScrollReveal.jsx (O CORRETO)
import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Se o elemento estiver visível (ou pelo menos 10% dele)
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Não precisa mais observar
        observer.unobserve(domRef.current); 
      }
    }, { threshold: 0.1 }); 

    observer.observe(domRef.current);

    return () => observer.disconnect(); // Limpeza
  }, []);

  return (
    <div 
      className={`scroll-reveal-container ${isVisible ? 'is-visible' : ''}`} 
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;