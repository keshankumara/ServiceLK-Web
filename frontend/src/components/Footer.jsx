import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  // Handle service navigation with login check
  const handleServiceClick = (serviceRoute) => {
    window.scrollTo(0, 0);
    if (isLoggedIn) {
      navigate(serviceRoute);
    } else {
      navigate('/login');
    }
  };

  // Handle services section scroll
  const handleServicesScroll = (e) => {
    e.preventDefault();
    const serviceSection = document.getElementById('service-topic');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation to home
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };
  return (
    <div className='main-div'>
        <div className='div1'>
            <div>
                <h1 className='nav-header' onClick={handleHomeClick}>ServiceLK</h1>
                <p className='nav-sub-header'>Book appointments for medical, wellness, beauty & more — anytime, anywhere.</p>
            </div>
            <div className='nav-links'>
                <div>
                    <h2>Quick Links</h2>
                    <p onClick={handleHomeClick}>Home</p>
                    <p onClick={handleServicesScroll}>Services</p>
                    <p>Contact</p>
                    {isLoggedIn ? (
                        <p onClick={() => navigate('/UserBookings')}>My Bookings</p>
                    ) : (
                        <>
                            <p onClick={() => navigate('/login')}>Login</p>
                            <p onClick={() => navigate('/signup')}>Register</p>
                        </>
                    )}
                </div>
                <div>
                    <h2>Services</h2>
                    <p onClick={() => handleServiceClick('/DoctorPage')}>Doctors & Clinics</p>
                    <p onClick={() => handleServiceClick('/SalonPage')}>Beauty & Salon</p>
                    <p onClick={() => handleServiceClick('/DentalPage')}>Dental Services</p>
                    <p onClick={() => handleServiceClick('/WellnessPage')}>Therapy & Wellness</p>
                    <p onClick={() => handleServiceClick('/VehiclePage')}>Vehicle Services</p>
                    <p onClick={() => handleServiceClick('/ConsultationsPage')}>Consultations</p>
                </div>
                <div>
                    <h2>Support</h2>
                    <p>FAQs</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Help Center</p>
                </div>
            </div>
        </div>
        <div className='div2'>
        </div>
        <div className='div3'>
            <p className='copyright-para'>© 2025 ServiceLK. All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
