import React from 'react'
import Navbar1 from './Components/Header/Navbar1'; // Adjust the path as necessary
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer'; // Adjust the path as necessary

function Layout() {
  return (
    <>
    <Navbar1 />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
