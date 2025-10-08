// src/components/TransitionSeparator.jsx

import React from 'react';

const TransitionSeparator = () => {
  return (
    <div 
      className="transition-separator"
      // 1. Acessibilidade: Indica que o elemento é decorativo e deve ser ignorado por leitores de tela.
      role="presentation" 
      // 2. Semântica (opcional): Adiciona um título descritivo para o desenvolvedor.
      title="Separador visual de seção" 
    >
      {/* 3. Remoção do &nbsp;: Melhor manter o conteúdo vazio e controlar a altura via CSS. */}
    </div>
  );
};

export default TransitionSeparator;