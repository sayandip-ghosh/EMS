import React, { useState } from 'react'
import Navbar1 from './Components/Header/Navbar1'; // Adjust the path as necessary
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer'; // Adjust the path as necessary

function Layout({role}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginToggle = () => {
      setIsLoggedIn(!isLoggedIn);
      console.log('Login state toggled:', isLoggedIn);
    };

  return (
    <>
    <Navbar1 role={role} isLoggedIn={isLoggedIn} handleLoginToggle={handleLoginToggle} />
    <Outlet context={{ handleLoginToggle }} />
    <Footer />
    </>
  )
}

export default Layout
