import React from 'react'
import './login.css'
import LoginImage from '../assets/images/Login/LoginImage.png';

function Login() {
  return (
    <div className='loginPage'>
        <div className="loginContainer">
          <div className="loginFormContainer">
            <h1 className='loginTitle'>Login</h1>
            <form>
              <div className='loginInputContainer'>
                <input type="email" placeholder="Enter your email" className='loginInput' />
              </div>
              <div className='loginInputContainer'>
                <input type="password" placeholder="Enter your password" className='loginInput' />
              </div>
              <div className='loginButtonContainer'>
                <button type="submit" className='loginButton'>Login</button>
              </div>
              <p className='test'>Don’t have an account? <a >Register</a></p>

            </form>
          </div>

          <div className='loginImageContainer'>
            <img src={LoginImage} alt="Login" className='loginImage' />
          </div>

      </div>
    </div>
    
  )
}

export default Login
