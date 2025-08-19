import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import DoctorPage from './pages/DoctorPage.jsx'
import NavBarNew from './components/NavBarNew.jsx'
import DentalPage from './pages/DentalPgae.jsx'
import SalonPage from './pages/SalonPage.jsx'
import VehiclePage from './pages/VehiclePage.jsx'
import WellnessPage from './pages/WellnessPage.jsx'
import ConsultationsPage from './pages/ConsultationsPage.jsx'
import Dashboard from './admin/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard/>
  </StrictMode>
)
