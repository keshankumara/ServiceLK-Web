import React from 'react'
import './Signup.css'
import SignupImage from '../assets/images/Login/SignupImage.png';

function Signup() {
  return (
     <div className='signupPage'>
            <div className="signupContainer">
              <div className="signupFormContainer">
                <h1 className='signupTitle'>Signup</h1>
                <form>
                  <div className='signupInputContainer'>
                    <input type="username" placeholder="Enter username" className='signupInput' />
                  </div>
                  <div className='signupInputContainer'>
                    <input type="email" placeholder="Enter your email" className='signupInput' />
                  </div>
                  <div className='signupInputContainer'>
                    <input type="password" placeholder="Enter your password" className='signupInput' />
                  </div>
                  <div className='signupButtonContainer'>
                    <button type="submit" className='signupButton'>Signup</button>
                  </div>
                  <p className='test'>Already have an account?  <a >Register</a></p>
    
                </form>
              </div>
    
              <div className='signupImageContainer'>
                <img src={SignupImage} alt="Signup" className='signupImage' />
              </div>
    
          </div>
        </div>
  )
}

export default Signup
