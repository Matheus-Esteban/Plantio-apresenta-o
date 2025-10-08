import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importado
import './index.css'
import App from './App.jsx'

// IMPORTANTE: O basename deve ser o nome do seu repositório
const REPO_NAME = "/Plantio-apresenta-o"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={REPO_NAME}> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)