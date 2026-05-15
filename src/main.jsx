import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/Landing page/Index'
import LoginPage from './pages/Login Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
