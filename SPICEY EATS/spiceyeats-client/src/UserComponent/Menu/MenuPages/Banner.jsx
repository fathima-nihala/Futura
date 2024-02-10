import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
    <div className="banner">
        <p className="banner-p"><span>&#9733;</span> delightful experience <span>&#9733;</span></p>
        <h2 className="head">Better Taste</h2>
        <h2 className="head-sub">To Make You Better</h2>
        <p className="banner-para">Crafting Culinary Memories, One Bite at a Time</p>
        <button className="banner-ptn"><Link className='banner-ptn-link'>View Our Menu</Link></button>
    </div>
</div>
  )
}

export default Banner