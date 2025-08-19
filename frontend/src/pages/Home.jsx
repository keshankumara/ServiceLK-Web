import React from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import './home.css';
import homeImage from '../assets/images/home-page-img-1.png';
import doctorImg from '../assets/images/home-page-doctor-img.png';
import beautyImg from '../assets/images/home-page-beauty.png';
import vehicleImg from '../assets/images/home-page-vehicle.png';
import consultantImg from '../assets/images/home-page-consultant.png';
import theropyImg from '../assets/images/home-page-theropy.png';
import dentalImg from '../assets/images/home-pag-dental.png';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  // Check login status once
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Handle card click: if logged in -> go to DoctorPage, else -> go to login
  const handleServiceClick = (serviceRoute) => {
    window.scrollTo(0, 0);
    if (isLoggedIn) {
      navigate(serviceRoute); // redirect to the actual service page
    } else {
      navigate('/login'); // redirect to login if not logged in
    }
  };

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
          <h1 className='service-main-header' id='service-topic'>OUR SERVICES</h1>
          <div className='homeServiceContainer'>
            <div className='services-card' onClick={() => handleServiceClick('/DoctorPage')}>
              <img src={doctorImg} alt="Health Service" className='service-icon' />
              <h2 className='service-header'>Doctors & Clinics</h2>
              <p className='service-description'>Find trusted healthcare professionals and book appointments instantly — no more long waiting times!</p>
            </div>
            <div className='services-card' onClick={() => handleServiceClick('/DentalPage')}>
              <img src={beautyImg} alt="Dental Service" className='service-icon' />
              <h2 className='service-header'>Dental Services</h2>
              <p className='service-description'>From routine cleanups to emergency visits, secure your dental slot online hassle-free.</p>
            </div>
            <div className='services-card' onClick={() => handleServiceClick('/VehiclePage')}>
              <img src={vehicleImg} alt="Vehicle Service" className='service-icon' />
              <h2 className='service-header'>Vehicle Services</h2>
              <p className='service-description'>Book slots for servicing your car or bike at your convenience. No calls needed.</p>
            </div>
            <div className='services-card' onClick={() => handleServiceClick('/ConsultationsPage')}>
              <img src={consultantImg} alt="Consultation Service" className='service-icon' />
              <h2 className='service-header'>Consultations</h2>
              <p className='service-description'>Book legal, business, or educational consulting sessions — all in one convenient place.</p>
            </div>
            <div className='services-card' onClick={() => handleServiceClick('/WellnessPage')}>
              <img src={theropyImg} alt="Wellness Service" className='service-icon' />
              <h2 className='service-header'>Wellness & Therapy</h2>
              <p className='service-description'>Need some peace of mind? Easily schedule sessions with therapists, yoga instructors, and wellness coaches.</p>
            </div>
            <div className='services-card' onClick={() => handleServiceClick('/SalonPage')}>
              <img src={dentalImg} alt="Beauty Service" className='service-icon' />
              <h2 className='service-header'>Beauty & Salon</h2>
              <p className='service-description'>Schedule your next makeover or hair appointment with top-rated stylists in just a few clicks.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
