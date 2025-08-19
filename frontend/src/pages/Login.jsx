import React from 'react';
import './login.css';
import LoginImage from '../assets/images/Login/LoginImage.png';

function Login() {

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = document.querySelector('.loginInput[type="text"]').value;
    const password = document.querySelector('.loginInput[type="password"]').value;

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        // Handles non-200 responses
        throw new Error('Login failed');
      }

      const data = await response.text(); // backend just returns text
      if (data === 'Login successful') {
        localStorage.setItem('isLoggedIn', 'true'); // <-- store login state
        window.location.href = '/DoctorPage';
      } else {
        alert('An error occurred. Please try again.');
      }

    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='loginPage'>
      <div className="loginContainer">
        <div className="loginFormContainer">
          <h1 className='loginTitle'>Login</h1>
          <form onSubmit={handleLogin}>
            <div className='loginInputContainer'>
              <input type="text" placeholder="Enter your username" className='loginInput' />
            </div>
            <div className='loginInputContainer'>
              <input type="password" placeholder="Enter your password" className='loginInput' />
            </div>
            <div className='loginButtonContainer'>
              <button type="submit" className="loginButton">Login</button>
            </div>
            <p className='test'>Don’t have an account? <a href="/signup">Register</a></p>
          </form>
        </div>

        <div className='loginImageContainer'>
          <img src={LoginImage} alt="Login" className='loginImage' />
        </div>
      </div>
    </div>
  );
}

export default Login;
