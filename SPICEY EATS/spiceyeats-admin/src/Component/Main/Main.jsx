import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Contents from '../Contents/Contents'
import './main.css'

const Main = () => {
  return (
    <div className='adminmain'>
        <div className='adminmain-dash'>
        <Dashboard/>
        </div>
        <div className='adminmain-cntnt'>
        <Contents/>
        </div>
    </div>
  )
}

export default Main