// src/components/Services.jsx

import React from 'react';
// IMPORTADO: Componente para animação de revelação ao rolar
import ScrollReveal from './ScrollReveal'; 
// Importa a logo e as imagens das funcionalidades
import LogoImage from '../assets/LOGO.png'; 

// Importações CORRETAS e RENOMEADAS para CLAREZA
import ContatosImage from '../assets/CLIENTES.png'; 
import ListaClientesImage from '../assets/Listadeclientes.png'; 

// Importa a imagem para "Histórico de Vendas"
import HistoricoVendasImage from '../assets/SISTEMA5.png'; 


// Dados das novas funcionalidades da Plant.io
const serviceData = [
  {
    title: 'Registro de Contatos e Leads',
    image: ContatosImage, // Usa a imagem CLIENTES.png
    description: 'Armazene e gerencie todos os contatos de clientes, fornecedores e parceiros de forma organizada para facilitar a comunicação e o relacionamento.',
  },
  {
    title: 'Lista de Clientes Detalhada (CRM)',
    image: ListaClientesImage, // Usa a imagem Listadeclientes.png
    description: 'Tenha acesso rápido a uma lista completa de clientes, com informações cruciais sobre histórico de pedidos, preferências e dados de contato, funcionando como um CRM simplificado.',
  },
  {
    title: 'Histórico de Vendas e Lucratividade',
    image: HistoricoVendasImage, // Usa a imagem para Vendas
    description: 'Monitore o desempenho financeiro de suas produções com um histórico detalhado de todas as vendas realizadas, permitindo análises precisas de lucratividade e tendências.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        
        {/* TÍTULO APRIMORADO: Mais focado na Inteligência */}
        <h2 className="section-title services-title-with-logo">
          Inteligência Operacional no 
          <img 
            src={LogoImage} 
            alt="Logo Plant.io" 
            className="title-logo-inline" 
          />
        </h2>
        
        <p className="section-subtitle">
          Nossas soluções completas combinam tecnologia de campo com gestão de negócios para garantir eficiência total.
        </p>

        <div className="services-flex-container">
          {serviceData.map((service, index) => (
            // ENVOLVENDO O CARD COM SCROLLREVEAL
            <ScrollReveal 
              key={index} 
              // Adiciona delay para o efeito cascata (200ms por card)
              delay={index * 200} 
              threshold={0.3} // Anima quando 30% do card está visível
            >
              <div className="service-card">
                
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;