import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Contents from '../Contents/Contents'
import './main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='main-dash'>
        <Dashboard/>
        </div>
        <div className='main-cntnt'>
        <Contents/>
        </div>
    </div>
  )
}

export default Main