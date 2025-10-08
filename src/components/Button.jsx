// src/components/Button.jsx
// Adicione a propriedade `href` com valor padrão '#'
const Button = ({ children, primary = true, href = '#' }) => {
  const classes = primary ? 'btn-primary' : 'btn-secondary';

  // O componente renderiza um <a> (link) com o href
  return (
    <a href={href} className={`btn ${classes}`}> 
      {children}
    </a>
  );
};

export default Button;