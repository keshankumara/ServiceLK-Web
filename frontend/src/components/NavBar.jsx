import React, { useState, useEffect } from 'react';
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
