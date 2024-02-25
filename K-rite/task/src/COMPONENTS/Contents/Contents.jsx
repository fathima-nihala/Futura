import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ContentItems/Navbar'

const Contents = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Contents