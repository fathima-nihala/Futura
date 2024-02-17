import React from 'react'
import Navbar from '../ContentItems/Navbar'
import { Outlet } from 'react-router-dom'

const Contents = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Contents
