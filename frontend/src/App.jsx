import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import DoctorPage from './pages/DoctorPage.jsx'
import DentalPage from './pages/DentalPgae.jsx'
import SalonPage from './pages/SalonPage.jsx'
import VehiclePage from './pages/VehiclePage.jsx'
import WellnessPage from './pages/WellnessPage.jsx'
import ConsultationsPage from './pages/ConsultationsPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/DoctorPage" element={<DoctorPage />} />
        <Route path="/DentalPage" element={<DentalPage />} />
        <Route path="/SalonPage" element={<SalonPage />} />
        <Route path="/VehiclePage" element={<VehiclePage />} />
        <Route path="/WellnessPage" element={<WellnessPage />} />
        <Route path="/ConsultationsPage" element={<ConsultationsPage />} />
      </Routes>
    </Router>
  );
}

export default App
