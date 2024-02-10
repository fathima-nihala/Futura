import React from 'react'
import Banner from './MenuPages/Banner'
import './menu.css'
import CustomerFav from './MenuPages/CustomerFav'
import OurStory from './MenuPages/OurStory'
import Special from './MenuPages/Special'
import Chef from './MenuPages/Chef'
const Menu = () => {
  return (
    <div>
        <Banner/>
        <CustomerFav/>
        <OurStory/>
        <Special/>
        <Chef/>
    </div>
  )
}

export default Menu


