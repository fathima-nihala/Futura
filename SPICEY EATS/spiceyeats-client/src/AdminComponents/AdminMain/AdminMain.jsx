import React from 'react'
import './AdminMain.css'
import Dashboard from '../Dashboard/Dashboard'
import Contents from '../Contents/Contents'

const AdminMain = () => {
  return (
    <div>
        <div className='adminmain'>
        <div className='adminmain-dash'>
        <Dashboard/>
        </div>
        <div className='adminmain-cntnt'>
        <Contents/>
        </div>
    </div>
    </div>
  )
}

export default AdminMain
