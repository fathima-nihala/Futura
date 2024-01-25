import React, { useState } from 'react'
import './Userbnr.css'
import userbnrimg1 from '../UserComponent/Images/prf-bnr.png'
import userbnrimg2 from '../UserComponent/Images/pf-bnr.jpg'
import usebnr3 from './Images/perfum.png'

const UserBanner = () => {

  const [isHovered, setIsHovered] = useState(false);
    
  const userbnrimg = isHovered ? userbnrimg2 : userbnrimg1  ;
  return (
    <div className='banner'>
      <div className='ban-lft'>
        <h3 className='ban-h'>Discover the Fragrance of <span className='ban-h-c'>Elegance</span></h3>
        <p className='ban-p'>No Elegance is Possible Without Perfume. <br />It is the Unseen, Unforgettable, Ultimate Accessory.</p>
        <button className='ban-btn'>Explore</button>
      </div>

      {/* <div >
        <img src={usebnr3} alt=""  style={{width:300}}/>
      </div> */}
      <div className='ban-right' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
       <img src={userbnrimg} alt="" />
       </div>
     
    </div>
  )
}

export default UserBanner