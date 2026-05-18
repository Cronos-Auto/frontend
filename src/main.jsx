import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/Landing page/Index'
import RegisterPage from './pages/Register Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage/> }/>
        <Route path='/register' element={ <RegisterPage/> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
