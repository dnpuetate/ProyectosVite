import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // El stricMode no funciona en modo de producción y sirve para:ç
  // obtener advertencias si estas usando codigo antiguo de react
  // Mostrar errores
  // Muestra el resultado de ejecutar los efectos para verificar su funcionamiento

  <React.StrictMode>
    <App />
  </React.StrictMode>
)
