import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import nihala1 from './Assets/nihala1.jpeg'

function Sidebar() {

    const recentItem=(topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return <div className='sidebar'>
    <div className='sidebar_top'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqlSLyVOqU2le9Xb0j37qMBJMQMfs2Hvl6w&usqp=CAU'/>
        <Avatar className='sidebar_avatar'/>
        <h2>Fathima Nihala</h2>
        <h4>fathima.nihala@gmail.com</h4>
    </div>
    <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
        <p>Views on post</p>
        <p className='sidebar_statNumber'>2,776</p>
        </div>
    </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  
}

export default Sidebar