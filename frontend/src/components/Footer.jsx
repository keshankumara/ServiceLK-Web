import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='main-div'>
        <div className='div1'>
            <div>
                <h1 className='nav-header'>ServiceLK</h1>
                <p className='nav-sub-header'>Book appointments for medical, wellness, beauty & more — anytime, anywhere.</p>
            </div>
            <div className='nav-links'>
                <div>
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Contact</p>
                    <p>Login</p>
                    <p>Register</p>
                </div>
                <div>
                    <h2>Services</h2>
                    <p>Doctors & Clinics</p>
                    <p>Beauty & Salon</p>
                    <p>Dental Services</p>
                    <p>Therapy & Wellness</p>
                    <p>Vehicle Services</p>
                    <p>Consultations</p>
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
