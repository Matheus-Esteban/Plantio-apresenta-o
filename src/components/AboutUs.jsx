import React from 'react';

// Componente auxiliar para aplicar a classe de destaque verde
const Highlight = ({ children }) => (
  <span className="about-highlight">{children}</span>
);

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        
        {/* Título Principal (Mantido) */}
        <h2 className="section-title">Revolucione a Gestão Rural com Dados</h2>
        
        <div className="about-columns">
          
          <div className="about-card solution-card">
            <h3 className="card-title">Nossa Solução Unificada</h3>
            
            {/* Texto Melhorado: Mais direto e focado no valor 360° */}
            <p className="card-text">
              A Plant.io é a única plataforma que você precisa. Unificamos <Highlight>monitoramento climático</Highlight>, <Highlight>gestão de tarefas</Highlight> e <Highlight>controle de ativos</Highlight>, oferecendo uma visão completa de <Highlight>360°</Highlight> de sua propriedade. Nosso foco é maximizar o Retorno Sobre Investimento (<Highlight>ROI</Highlight>) da sua operação.
            </p>
            
            <ul className="feature-list">
              <li>Monitoramento Climático Detalhado</li>
              <li>Gestão Completa de Tarefas e Colheitas</li>
              <li>Controle de Depreciação de Ativos</li>
            </ul>
          </div>
          
          <div className="about-card differential-card">
            <h3 className="card-title">Nosso Diferencial Competitivo</h3>
            
            {/* Texto Melhorado: Clareza sobre insights e lucratividade */}
            <p className="card-text">
              Vamos além do gerenciamento básico. Utilizamos <Highlight>dados coletados</Highlight> para gerar <Highlight>insights exclusivos</Highlight>, aumentando drasticamente a <Highlight>eficiência</Highlight> e a <Highlight>lucratividade</Highlight> da sua produção. E mais: abrimos uma nova fronteira inédita de monetização no Agrotech:
            </p>
            
            {/* Destaque de Crédito de Carbono (Mantido) */}
            <div className="highlight-box">
              <h4 className="highlight-title">Creditação de Carbono</h4>
              <p className="highlight-text">
                Oferecemos suporte completo na <Highlight>certificação de créditos de carbono</Highlight> de sua propriedade, transformando práticas sustentáveis em um <Highlight>novo fluxo de receita</Highlight> inédito na nossa região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;