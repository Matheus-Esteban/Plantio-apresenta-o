// src/components/TransitionSeparator.jsx

import React from 'react';
// A importação de UvaImage não é mais necessária, pois o CSS carregará a imagem da pasta public/.

const TransitionSeparator = () => {
  return (
    <div className="transition-separator">
      {/* VAZIO. O padrão repetível de uvas é o background CSS. */}
      &nbsp; {/* Um espaço em branco opcional para garantir a renderização da div. */}
    </div>
  );
};

export default TransitionSeparator;