// src/App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';         
// Certifique-se de que não há importações de .css ou logos antigos

function App() {
  return (
    // Remova as classes Tailwind: min-h-screen flex flex-col
    <div className="app-container"> 
      <Header />
      <main className="main-content">
        <Home /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

// Agora, crie os estilos correspondentes em src/index.css:
/*
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex-grow: 1;
}
*/