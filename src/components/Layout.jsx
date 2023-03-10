import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <NewsLetter />
        <Footer />  
    </>
  )
}

export default Layout