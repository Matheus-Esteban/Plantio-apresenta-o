// src/components/ProductFocus.jsx

import React from 'react';
import Button from './Button'; // Importa o componente Button
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
    
    // Certifique-se de que o CSS lide com o contraste da imagem de fundo vs. o texto.
    marginTop: '-1px', 
    paddingTop: '6rem', 
    paddingBottom: '6rem',
  };

  // Componente auxiliar para aplicar a classe de destaque verde (Mantido)
  const Highlight = ({ children }) => (
    <span className="text-highlight">{children}</span>
  );

  return (
    // ID para ser o alvo do link 'Projetos'
    <section id="product-focus" className="product-focus-section" style={sectionStyle}>
      <div className="product-focus-content">
        
        {/* Lado do Texto (60% da largura) */}
        <div className="product-focus-text">
          
          {/* TÍTULO APRIMORADO: Mais focado no resultado */}
          <h2 className="section-title focus-title">
            O Projeto Plant.io: Precisão Agrícola Garantida
          </h2>
          
          {/* PARÁGRAFO REFORMATADO: Mantendo o foco na ciência e controle */}
          <p className="focus-paragraph">
            O <Highlight>Sistema Plant.io</Highlight> transforma a gestão rural em uma **ciência precisa**. Nossa plataforma intuitiva oferece controle em tempo real, desde o **monitoramento de microclimas** até a análise detalhada de desempenho. Receba notificações cruciais para **agir no momento certo** e mantenha um registro imutável de todo o ciclo de produção.
          </p>
          
          {/* LISTA DE RECURSOS REFORMATADA: Usando <strong> para destacar o BENEFÍCIO principal */}
          <ul className="focus-features">
            <li>
              <Highlight>Monitoramento Climático Preditivo:</Highlight> 
              <strong>Antecipe riscos e otimize o uso de insumos.</strong> Dados em tempo real e ultra-locais para planejamento.
            </li>
            <li>
              <Highlight>Notificações Críticas:</Highlight> 
              <strong>Reduza perdas e economize recursos.</strong> Alertas imediatos sobre mudanças climáticas e status de tarefas.
            </li>
            <li>
              <Highlight>Análise de Lucratividade:</Highlight> 
              <strong>Transforme dados brutos em decisões financeiras.</strong> Relatórios que convertem registros de colheita e ativos em ROI.
            </li>
            <li>
              <Highlight>Gerenciamento de Ativos e Logs:</Highlight> 
              <strong>Garanta a rastreabilidade e a credibilidade.</strong> Registro imutável e seguro de atividades e manutenção.
            </li>
          </ul>
          
          {/* ADIÇÃO DO BOTÃO CTA para ação imediata */}
          <div className="focus-cta-action">
            <Button primary={true} href="#contact">Conhecer o Projeto em Detalhes</Button>
          </div>
          
          <p className="focus-cta-text">
            *Nossa solução garante maior eficiência e reduz custos, aumentando a produtividade e o valor de mercado da sua fazenda.*
          </p>
        </div>
        
        {/* Lado das Imagens (40% da largura) - Mantido */}
        <div className="product-focus-image-grid">
          <img 
            src={Planta} 
            alt="Interface do Sistema Plant.io - Monitoramento de Campos" 
            className="product-focus-image grid-image-1"
          />
          <img 
            src={Feijao} 
            alt="Interface do Sistema Plant.io - Análise de Clima e Solo" 
            className="product-focus-image grid-image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;