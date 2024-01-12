import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Contents from '../Contents/Contents'
import './Main.css'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <div className='main'>
       <Dashboard/>   
       <Contents/>
    </div>
  )
}

export default Main
