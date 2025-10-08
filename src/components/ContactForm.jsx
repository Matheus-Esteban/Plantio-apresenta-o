// src/components/ContactForm.jsx

import React from 'react';
import Button from './Button'; 
// IMPORTANTE: URL do seu Google Forms atualizado
const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSelkI-ylu691jASUfEFU7BpAxNDWLsuHxJtEREl5dN-7d7yvA/viewform?usp=header"; 

const ContactForm = () => {
  // Removemos toda a lógica de estado/simulação de formulário
  
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        
        {/* Coluna 1: CTA e Convite ao Investidor (Esquerda) */}
        <div className="contact-info">
          <h2 className="section-title contact-title">
            Pronto para Transformar sua Gestão?
          </h2>
          <p className="contact-text">
            Seja um dos primeiros a adotar a tecnologia Plant.io e comece a monetizar sua sustentabilidade. Clique no botão ao lado para solicitar uma demonstração gratuita através do nosso formulário.
          </p>
          
          <div className="investor-cta">
            <h3>Interesse em Investimento?</h3>
            <p>Se você é um investidor buscando uma startup de alto impacto no Agrotech, mencione no campo de mensagem. Temos um pitch deck exclusivo para apresentar.</p>
          </div>
        </div>
        
        {/* Coluna 2: NOVO CTA QUE LEVA PARA O GOOGLE FORMS (Direita) */}
        <div className="contact-form-container contact-cta-container">
          <p className="forms-cta-text">
            Preencha nosso formulário rápido e comece a otimizar sua fazenda hoje mesmo!
          </p>
          
          {/* O botão AGORA usa o link do Forms */}
          <Button 
            primary={true} 
            href={GOOGLE_FORMS_URL} // URL do Forms
            target="_blank" // Abre em uma nova aba para não perder a página
          >
              Solicitar Demonstração
          </Button>
          
          <p className="forms-note-text">
            *Você será redirecionado para o formulário seguro do Google Forms.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;