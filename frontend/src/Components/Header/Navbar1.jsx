import React from 'react';

const Navbar = () => {
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

          {/* Right: Sign Up Button */}
          {/* <div className="flex items-center">
            <a
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
