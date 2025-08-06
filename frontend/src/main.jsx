import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import DoctorPage from './pages/DoctorPage.jsx'
import NavBarNew from './components/NavBarNew.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoctorPage/>
  </StrictMode>,
)
