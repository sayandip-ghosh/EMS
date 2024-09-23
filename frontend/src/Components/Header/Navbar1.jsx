import React, { useState } from 'react';
import './Navbar1.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({role, isLoggedIn, handleLoginToggle }) => {
 
  console.log('Navbar isLoggedIn:', isLoggedIn)

  return (
<nav className="navbar">
        <div className="navbar-logo">
          <img src="./src/assets/Images/logo.png" alt="logo" className='logo' />
          <h1>Emp<span>Space</span></h1>
        </div>
        <button className="about-btn">About</button>
      </nav>

  );
};

export default Navbar;
