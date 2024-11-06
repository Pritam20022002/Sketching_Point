import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <a href="https://sketching-point-frontend.onrender.com/" rel="noopener noreferrer" > ← BACK TO USER-MODE</a>
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar