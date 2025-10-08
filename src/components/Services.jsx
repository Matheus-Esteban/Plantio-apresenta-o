// src/components/Services.jsx

import React from 'react';
// Importa a logo e as imagens das funcionalidades
import LogoImage from '../assets/LOGO.png'; 

// Importações CORRETAS e RENOMEADAS para CLAREZA
import ContatosImage from '../assets/CLIENTES.png'; 
import ListaClientesImage from '../assets/Listadeclientes.png'; 

// Adicione aqui a importação da imagem para "Histórico de Vendas"
// IMPORTANTE: Substitua 'SISTEMA5.png' pelo nome do seu arquivo real na pasta 'assets'
import HistoricoVendasImage from '../assets/SISTEMA5.png'; 


// Dados das novas funcionalidades da Plant.io
const serviceData = [
  {
    title: 'Registro de Contatos',
    image: ContatosImage, // Usa a imagem CLIENTES.png
    description: 'Armazene e gerencie todos os contatos de clientes e parceiros de forma organizada para facilitar a comunicação e o relacionamento.',
  },
  {
    title: 'Lista de Clientes Detalhada',
    image: ListaClientesImage, // Usa a imagem Listadeclientes.png
    description: 'Tenha acesso rápido a uma lista completa de clientes, com informações cruciais sobre histórico de pedidos, preferências e dados de contato.',
  },
  {
    title: 'Histórico de Vendas',
    image: HistoricoVendasImage, // Usa a imagem para Vendas
    description: 'Monitore o desempenho financeiro de suas produções com um histórico detalhado de todas as vendas realizadas, permitindo análises de lucratividade.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        
        {/* TÍTULO com a Logo Injetada (mantido) */}
        <h2 className="section-title services-title-with-logo">
          Mais Funcionalidades do 
          <img 
            src={LogoImage} 
            alt="Logo Plant.io" 
            className="title-logo-inline" 
          />
        </h2>
        
        <p className="section-subtitle">
          Soluções completas que combinam tecnologia, sustentabilidade e eficiência operacional.
        </p>

        {/* MODIFICADO para usar Flexbox no JSX */}
        <div className="services-flex-container">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              
              <div className="card-image-container">
                <img 
                  src={service.image} 
                  alt={`Funcionalidade ${service.title}`} 
                  className="card-feature-image"
                />
              </div>
              
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;