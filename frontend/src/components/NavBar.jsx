import React from 'react'
import './navBar.css'

function navBar() {
  return (
    <div className='navBarContainer'>
        <div className='navBarLogo'>
            <h1 className='navBarTitle'>ServiceLK</h1>
        </div>
        <div className='navBarLinks'>
            <ul className='navBarList'>
                <li className='navBarItem'>Home</li>
                <li className='navBarItem'>Services</li>
                <li className='navBarItem'>Signup</li>
                <li className='navBarItem'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default navBar
