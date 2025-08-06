import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OdooApp from './OdooApp'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OdooApp />
  </StrictMode>,
)
