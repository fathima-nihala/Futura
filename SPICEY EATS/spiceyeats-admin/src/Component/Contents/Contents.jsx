import React from 'react'
import Navbar from '../ContentItem/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ContentItem/Footer'

const Contents = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Contents