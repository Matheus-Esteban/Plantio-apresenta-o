// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css'; // Importa os estilos globais

const App = () => {
  return (
    <div className="app-container">
      <Header />
      
      <div className="main-content">
        <Home />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;