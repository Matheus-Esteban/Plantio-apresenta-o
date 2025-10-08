import React from 'react';

// Componente auxiliar para aplicar a classe de destaque verde
// Mantido - Ótima prática!
const Highlight = ({ children }) => (
  <span className="about-highlight">{children}</span>
);

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        
        {/* Título Principal APRIMORADO: Mais focado no DESAFIO e na VISÃO */}
        <h2 className="section-title">Da Intuição ao Lucro: A Revolução da Gestão Rural Inteligente</h2>
        
        <div className="about-columns">
          
          <div className="about-card solution-card">
            {/* Título da Coluna APRIMORADO: Mais forte e focado na ação */}
            <h3 className="card-title">Sua Propriedade, Seus Dados, Seu 360°</h3>
            
            {/* Texto APRIMORADO: Mais orientado ao VALOR e ao problema resolvido */}
            <p className="card-text">
              Chega de planilhas e suposições. A Plant.io é a **Plataforma de Inteligência** que integra e analisa todos os dados da sua operação em <Highlight>tempo real</Highlight>. Oferecemos a única visão de <Highlight>360°</Highlight> que unifica <Highlight>Monitoramento Climático Preditivo</Highlight>, <Highlight>Gestão Logística de Tarefas</Highlight> e <Highlight>Controle Patrimonial</Highlight> para otimizar o seu <Highlight>Retorno Sobre Investimento (ROI)</Highlight>.
            </p>
            
            <ul className="feature-list">
              {/* Lista Aprimorada: Mais detalhada e com foco no benefício */}
              <li><strong className="list-emphasis">Previsão e Ação:</strong> Monitoramento Climático e de Solo Detalhado.</li>
              <li><strong className="list-emphasis">Otimização Logística:</strong> Gestão de Equipes, Insumos e Colheitas.</li>
              <li><strong className="list-emphasis">Saúde Financeira:</strong> Controle Preciso de Ativos e Depreciação.</li>
            </ul>
          </div>
          
          <div className="about-card differential-card">
            {/* Título da Coluna APRIMORADO: Foco no Resultado Único */}
            <h3 className="card-title">Nosso Diferencial: Monetizando a Sustentabilidade</h3>
            
            {/* Texto APRIMORADO: Mais enfático no "ir além" e no insight */}
            <p className="card-text">
              Não somos apenas um software de gestão. Somos uma **máquina de insights**. Transformamos <Highlight>dados brutos de campo</Highlight> em <Highlight>decisões estratégicas</Highlight> que elevam a sua **eficiência operacional** a níveis inéditos. Mas a verdadeira revolução está aqui:
            </p>
            
            {/* Destaque de Crédito de Carbono APRIMORADO: Mais direto e com foco no status de pioneiro */}
            <div className="highlight-box carbon-highlight">
              <h4 className="highlight-title">Créditos de Carbono: Novo Fluxo de Caixa</h4>
              <p className="highlight-text">
                Somos pioneiros em transformar suas **práticas sustentáveis** em <Highlight>Capital</Highlight>. Oferecemos a <Highlight>certificação completa</Highlight> de créditos de carbono, abrindo um **novo e inédito fluxo de receita** para sua propriedade no Agrotech regional. Sua gestão responsável agora gera <Highlight>lucro adicional</Highlight>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;