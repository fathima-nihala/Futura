import React from 'react'
import UserNavbar from './MainPages/UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './MainPages/Footer'

const Main = () => {
  return (
    <div>
        <UserNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main