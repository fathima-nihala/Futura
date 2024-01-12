import React from 'react'
import Navbar from '../Pages/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/Footer'
const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
