// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORREÇÃO CRÍTICA: Base URL do repositório
  base: "/Plantio-apresenta-o/" 
})