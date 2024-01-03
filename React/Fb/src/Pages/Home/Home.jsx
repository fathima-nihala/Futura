import React from 'react'
import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'

const Home = () => {

    // const user=null;
  return (
    <div className='home'>
        <Header/>
        <div className='home-body'>
        <Sidebar/>
        <Feed/>
        </div>
    </div>
  )
}

export default Home