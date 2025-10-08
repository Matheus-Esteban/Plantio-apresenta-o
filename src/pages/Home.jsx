// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero'; 
import ProductFocus from '../components/ProductFocus'; 
import Services from '../components/Services'; 
import AboutUs from '../components/AboutUs'; 
import ContactForm from '../components/ContactForm'; 
import TransitionSeparator from '../components/TransitionSeparator'; 
import ScrollReveal from '../components/ScrollReveal'; 

const Home = () => {
  return (
    <main role="main"> 
      
      <Hero />
      
      <ScrollReveal threshold={0.2} delay={50}>
        <ProductFocus />
      </ScrollReveal>
      
      <TransitionSeparator /> 
      
      <ScrollReveal threshold={0.15}>
        <Services />
      </ScrollReveal>
      
      <TransitionSeparator />
      
      <ScrollReveal threshold={0.1}>
        <AboutUs /> 
      </ScrollReveal>
      
      <TransitionSeparator /> 

      <ScrollReveal threshold={0.2}>
        <ContactForm /> 
      </ScrollReveal>
      
    </main>
  );
};

export default Home;