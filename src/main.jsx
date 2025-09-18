import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import BackEndContext from './providers/BackendProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackEndContext>
    <App />
    </BackEndContext>
  </StrictMode>,
)
