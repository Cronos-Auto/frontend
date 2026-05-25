import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/Landing page/Index'
import RegisterPage from './pages/Register Page'
import LoginPage from './pages/Login Page'
import TeacherListPage from './pages/TeacherList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={ <LandingPage/> }/>
        <Route path='/register' element={ <RegisterPage/> }/>
        <Route path='/login' element={ <LoginPage/> }/>
        <Route path='/' element={ <TeacherListPage/> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
