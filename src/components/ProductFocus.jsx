// src/components/ProductFocus.jsx

import React from 'react';
// Importa as imagens para o carrossel (lado direito)
import Planta from '../assets/Principal.png'; 
import Feijao from '../assets/Clima.png'; 
// Importa o Milho para o FUNDO 
import MilhoFundo from '../assets/MILHO.png'; 

const ProductFocus = () => {
  // Estilo dinâmico que injeta a imagem do Milho diretamente no React
  const sectionStyle = {
    backgroundImage: `url(${MilhoFundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundAttachment: 'fixed' foi removido para evitar problemas no fundo
    
    marginTop: '-1px', 
    paddingTop: '6rem', 
    paddingBottom: '6rem',
  };

  // Componente auxiliar para aplicar a classe de destaque verde
  const Highlight = ({ children }) => (
    <span className="text-highlight">{children}</span>
  );

  return (
    // [ADICIONADO] ID para ser o alvo do link 'Projetos'
    <section id="product-focus" className="product-focus-section" style={sectionStyle}>
      <div className="product-focus-content">
        
        {/* Lado do Texto (60% da largura) */}
        <div className="product-focus-text">
          
          {/* TÍTULO NOVO */}
          <h2 className="section-title focus-title">
            Tecnologia e Campo unidos
          </h2>
          
          {/* PARÁGRAFO REFORMATADO: Usando o componente Highlight para o texto verde */}
          <p className="focus-paragraph">
            O <Highlight>Sistema Plant.io</Highlight> transforma a gestão rural em uma ciência precisa. Nossa plataforma intuitiva oferece controle em tempo real, desde o monitoramento de microclimas até a análise detalhada de desempenho. Receba notificações cruciais para agir no momento certo e mantenha um registro imutável de todo o ciclo de produção.
          </p>
          
          {/* LISTA DE RECURSOS REFORMATADA */}
          <ul className="focus-features">
            <li><Highlight>Monitoramento Climático:</Highlight> Dados em tempo real e ultra-locais para planejamento de plantio.</li>
            <li><Highlight>Notificações Inteligentes:</Highlight> Alertas imediatos sobre mudanças climáticas e status de tarefas.</li>
            <li><Highlight>Análise de Dados Avançada:</Highlight> Relatórios que transformam registros de colheita e ativos em lucratividade.</li>
            <li><Highlight>Registros Imutáveis:</Highlight> Gerenciamento seguro de todas as atividades e manutenção de ativos.</li>
          </ul>
          
          <p className="focus-cta-text">
            *Nossa solução garante maior eficiência, reduzindo custos e aumentando a produtividade da sua empresa.*
          </p>
        </div>
        
        {/* Lado das Imagens (40% da largura) - Devemos inserir screenshots do sistema aqui. */}
        <div className="product-focus-image-grid">
          <img 
            src={Planta} 
            alt="Interface do Sistema - Monitoramento" 
            className="product-focus-image grid-image-1"
          />
          <img 
            src={Feijao} 
            alt="Interface do Sistema - Análise de Dados" 
            className="product-focus-image grid-image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;