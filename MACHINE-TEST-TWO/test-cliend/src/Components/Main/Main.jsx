import React from 'react'
import './main.css'
import Dashboard from '../Dashbord/Dashboard'
import Contents from '../Contents/Contents'

const Main = () => {
    return (
        <div className='main'>
            <div className='main-dash'>
                <Dashboard />
            </div>
            <div className='main-cntnt'>
                <Contents/>
        </div>
        </div>
    )
}

export default Main
