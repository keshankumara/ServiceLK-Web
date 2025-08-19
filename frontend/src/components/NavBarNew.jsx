import React from 'react'
import { Link } from 'react-router-dom'
import './navBarNew.css'

function NavBarNew() {
  return (
        <div className='navBarNewLinks'>
            <ul className='navBarNewList'>
                <li>
                    <Link to="/DoctorPage" className='navBarNewLink'>Doctors & Clinics</Link>
                </li>
                <li>
                    <Link to="/SalonPage" className='navBarNewLink'>Beauty & Salon</Link>
                </li>
                <li>
                    <Link to="/WellnessPage" className='navBarNewLink'>Therapy & Wellness</Link>
                </li>
                <li>
                    <Link to="/ConsultationsPage" className='navBarNewLink'>Consultations</Link>
                </li>
                <li>
                    <Link to="/DentalPage" className='navBarNewLink'>Dental Services</Link>
                </li>
                <li>
                    <Link to="/VehiclePage" className='navBarNewLink'>Vehicle Services</Link>
                </li>
            </ul>
        </div>
  )
}

export default NavBarNew
