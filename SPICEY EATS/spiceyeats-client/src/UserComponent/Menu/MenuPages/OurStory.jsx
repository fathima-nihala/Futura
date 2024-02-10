import React from 'react'
import './ourstory.css'
import { Link } from 'react-router-dom'

const OurStory = () => {
  return (
    <div className="story">
        <div className="story-left">
            <p className="story-head">our story</p>
            <h2 className="story-main-head">Every Flavour <br /> Tells a Story</h2>
           <p className='story-p'>There are somethings money can not buy. <br /> For everything else, there is   MasterCard. <br /> You deserve a break today.Wake up with <br /> the king.The flavours of nature just wow! <br />Rooted in passion, We acurate unforgett- <br />able dining experiences and exceptional <br /> services,blending culinary artistry with <br /> warm hospitality.</p>
            <p className="stry-book">Book Throgh Call</p>
            <p className="stry-book">+911234567890</p>
            <button className="story-btn"><Link to='/about' className='story-btn-link'>Reed More</Link></button>
        </div>
        <div className="story-right">
            <img src="https://img.freepik.com/free-photo/chef-holding-pan-with-fire-inside_144627-16644.jpg?size=626&ext=jpg&ga=GA1.1.141120536.1706946110&semt=ais" alt="" />
        </div>
    </div>
   
  )
}

export default OurStory
