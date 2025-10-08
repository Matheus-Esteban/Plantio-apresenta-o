// src/components/Button.jsx

import React from 'react';

// 1. O componente agora recebe 'onClick' e o booleano 'isLink' para controle semântico.
// 2. '...rest' captura quaisquer outras props não definidas (ex: target, type, aria-label).
const Button = ({ 
  children, 
  primary = true, 
  href = '#',
  onClick,
  isLink = true, // Define se renderiza <a> (link) ou <button> (ação pura)
  ...rest // Captura props remanescentes (className, target, disabled, etc.)
}) => {
  
  // Define a classe de estilo base
  const baseClasses = primary ? 'btn-primary' : 'btn-secondary';
  const allClasses = `btn ${baseClasses} ${rest.className || ''}`;
  
  // Remove className das props remanescentes para evitar duplicação no spread
  delete rest.className; 

  // --- LÓGICA DE RENDERIZAÇÃO CONDICIONAL ---

  if (isLink) {
    // Caso 1: Renderiza como Link (<a>). Útil para navegação.
    return (
      <a 
        href={href} 
        className={allClasses} 
        onClick={onClick}
        {...rest} // Espalha props remanescentes (ex: target="_blank")
      > 
        {children}
      </a>
    );
  }

  // Caso 2: Renderiza como Botão Semântico (<button>). Útil em formulários ou ações simples.
  return (
    <button 
      type="button" // Define um tipo padrão para evitar submissão de formulário indesejada
      className={allClasses} 
      onClick={onClick}
      {...rest} // Espalha props remanescentes (ex: disabled, type="submit")
    >
      {children}
    </button>
  );
};

export default Button;