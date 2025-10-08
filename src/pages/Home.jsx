// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero'; 
import ProductFocus from '../components/ProductFocus'; 
import Services from '../components/Services'; 
import AboutUs from '../components/AboutUs'; 
import ContactForm from '../components/ContactForm'; 
import TransitionSeparator from '../components/TransitionSeparator'; 
// Importa o componente ScrollReveal (o wrapper de animação real)
import ScrollReveal from '../components/ScrollReveal'; 

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* 1. FOCO NO PRODUTO (Fundo Milho) */}
      <ScrollReveal>
        <ProductFocus />
      </ScrollReveal>
      
      {/* >>> NOVO SEPARADOR AQUI <<< */}
      <TransitionSeparator /> 
      
      {/* 2. SERVIÇOS (Fundo Branco) */}
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      
      {/* >>> NOVO SEPARADOR AQUI <<< */}
      <TransitionSeparator />
      
      {/* 3. SOBRE NÓS/DIFERENCIAL (Fundo Claro) */}
      <ScrollReveal>
        <AboutUs /> 
      </ScrollReveal>
      
      {/* >>> SEPARADOR JÁ EXISTENTE (Transição para o Contato) <<< */}
      <TransitionSeparator /> 

      {/* 4. FORMULÁRIO DE CONTATO/CTA FINAL */}
      <ScrollReveal>
        <ContactForm /> 
      </ScrollReveal>
      
    </>
  );
};

export default Home;