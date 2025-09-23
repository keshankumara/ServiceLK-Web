import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  const handleServiceClick = (e) => {
    e.preventDefault();
    const serviceSection = document.getElementById('service-topic');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // clear login flag
    localStorage.removeItem('userData'); // clear user data
    setIsLoggedIn(false);
    window.location.href = '/'; // redirect to home
  };

  return (
    <div className='navBarContainer'>
      <div className='navBarLogo'>
        <h1 className='navBarTitle'>ServiceLK</h1>
      </div>
      <div className='navBarLinks'>
        <ul className='navBarList'>
          <li className='navBarItem'>
            <a href='/' className='navBarLink'>Home</a>
          </li>

          <li className='navBarItem'>
            <a href='#service-topic' className='navBarLink' onClick={handleServiceClick}>
              Services
            </a>
          </li>

          {/* Show service links only when logged in */}
          {isLoggedIn && (
            <>
              <li className='navBarItem'>
                <Link to="/DoctorPage" className='navBarLink'>Doctors & Clinics</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/SalonPage" className='navBarLink'>Beauty & Salon</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/WellnessPage" className='navBarLink'>Therapy & Wellness</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/ConsultationsPage" className='navBarLink'>Consultations</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/DentalPage" className='navBarLink'>Dental Services</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/VehiclePage" className='navBarLink'>Vehicle Services</Link>
              </li>
              <li className='navBarItem'>
                <Link to="/UserBookings" className='navBarLink'>My Bookings</Link>
              </li>
            </>
          )}

          {/* Show Login if not logged in, Logout if logged in */}
          <li className='navBarItem'>
            {isLoggedIn ? (
              <a
                href="/"
                className="navBarLink"
                onClick={e => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Log out
              </a>
            ) : (
              <a href='/login' className='navBarLink'>Login</a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
