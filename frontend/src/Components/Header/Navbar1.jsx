import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({role, isLoggedIn, handleLoginToggle }) => {
 
  console.log('Navbar isLoggedIn:', isLoggedIn)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Text */}
          <div className="flex items-center">
            {/* Logo */}
            <img
              className="h-10 w-10"
              src="https://via.placeholder.com/40" // Placeholder for logo, replace with actual logo
              alt="Logo"
            />
            <span className="ml-3 text-2xl font-bold text-gray-800">
              Employee Management System
            </span>
          </div>

          {/* Right: Conditionally Render Home or Sign Up */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                {/* <NavLink
                  to={`/${role}/home`}
                  className="px-4 py-2  text-black font-semibold hover:text-gray-600 transition duration-200"
                >
                  Home
                </NavLink> */}
                {/* Temporary logout button for testing */}
                <Link to='/'>
                <button
                  onClick={handleLoginToggle}
                  className="ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 transition duration-200"
                >
                  Logout
                </button>
                </Link>
              </>
            ) : (
              <>
                
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
