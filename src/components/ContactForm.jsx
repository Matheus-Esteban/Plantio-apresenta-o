// src/components/ContactForm.jsx

import React from 'react';
import Button from './Button'; 
// IMPORTANTE: URL do seu Google Forms atualizado
const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSelkI-ylu691jASUfEFU7BpAxNDWLsuHxJtEREl5dN-7d7yvA/viewform?usp=header"; 

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        
        {/* Coluna 1: CTA e Convite ao Investidor (Esquerda) */}
        <div className="contact-info">
          {/* Título Aprimorado: Mais direto e com foco no futuro */}
          <h2 className="section-title contact-title">
            Comece a Construir sua Fazenda do Futuro
          </h2>
          {/* Texto Aprimorado: Mais foco em ação e valor */}
          <p className="contact-text">
            **Não perca tempo com suposições.** Junte-se aos pioneiros da Plant.io e use a gestão inteligente para **maximizar seu ROI** e **monetizar a sustentabilidade**. Clique no botão ao lado e agende sua demonstração gratuita.
          </p>
          
          <hr className="contact-separator" /> {/* Separador visual */}

          {/* Destaque Investidor Aprimorado: Mais claro e profissional */}
          <div className="investor-cta">
            <h3>Visão de Investimento de Alto Impacto?</h3>
            <p>Se você é um **investidor** ou **parceiro estratégico** buscando uma startup validada e de alto crescimento no Agrotech, por favor, **mencione seu interesse** no campo de mensagem. Temos um **Pitch Deck Exclusivo** para você.</p>
          </div>
        </div>
        
        {/* Coluna 2: CTA FINAL QUE LEVA PARA O GOOGLE FORMS (Direita) */}
        <div className="contact-form-container contact-cta-container">
          
          {/* Texto Aprimorado: Foco na rapidez e facilidade */}
          <p className="forms-cta-text">
            Levará menos de **3 minutos** para preencher nosso formulário de contato. Garanta sua vaga para uma consulta com nossa equipe.
          </p>
          
          {/* O botão AGORA usa o atributo 'rel' por segurança ao usar target="_blank" */}
          <Button 
            primary={true} 
            href={GOOGLE_FORMS_URL} // URL do Forms
            target="_blank" // Abre em uma nova aba
            rel="noopener noreferrer" // Importante por segurança ao usar target="_blank"
            // Adicionando um atributo ARIA para acessibilidade
            aria-label="Abrir formulário de demonstração no Google Forms em nova aba"
          >
              Solicitar Demonstração Gratuita
          </Button>
          
          {/* Nota Aprimorada: Mais informativa e confiável */}
          <p className="forms-note-text">
            *Você será redirecionado para o **formulário seguro do Google Forms**.
            Seus dados serão utilizados apenas para agendamento.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;