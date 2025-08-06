import React from 'react'
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'
import './home.css'
import homeImage from '../assets/images/home-page-img-1.png';
import doctorImg from '../assets/images/home-page-doctor-img.png'
import beautyImg from '../assets/images/home-page-beauty.png'
import vehicleImg from '../assets/images/home-page-vehicle.png'
import consultantImg from '../assets/images/home-page-consultant.png'
import theropyImg from '../assets/images/home-page-theropy.png'
import dentalImg from '../assets/images/home-pag-dental.png'
import { FaSearch } from 'react-icons/fa';

function Home() {
  return (
    <div>
        <NavBar />
        <div className="homeContainer">
            <div className='homediv1'>
                <img src={homeImage} alt="ServiceLK Banner" className='homeImage' />
                <div className='homeSearch'>
                    <input type="text" className="home-search-input" placeholder="Search for services..." />
                    <FaSearch className="search-icon" />
                </div>
                <div className="homeText">
                    <h1 className="home-header-details">Book</h1>
                    <h1 className="home-header-details">Appointments</h1>
                    <h1 className="home-header-details">Anytime</h1>
                    <h1 className="home-header-details">Anywhere..</h1>
                </div>
                <p className='home-simple-para'>Whether you're booking a health checkup, salon visit, or business consultation — we've got you covered. Fast. Simple. Reliable.</p>
            </div>
            <div className='homediv2'>
                <h1 className='service-main-header'>OUR SERVICES</h1>
                <div className='homeServiceContainer'>
                    <div className='services-card'>
                        <img src={doctorImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                    <div className='services-card'>
                        <img src={beautyImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                    <div className='services-card'>
                        <img src={vehicleImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                    <div className='services-card'>
                        <img src={consultantImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                    <div className='services-card'>
                        <img src={theropyImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                    <div className='services-card'>
                        <img src={dentalImg} alt="Health Service" className='service-icon' />
                        <h2 className='service-header'>Doctors & Clinics</h2>
                        <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      
    </div>
  )
}

export default Home
