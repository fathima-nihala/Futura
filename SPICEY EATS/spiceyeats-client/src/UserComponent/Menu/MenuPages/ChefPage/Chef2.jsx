import React from 'react'
import './chef1.css'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Chef2 = () => {
  return (
    <div className='chef1'>
        <div className='chef-g'><Link to='/'><FaArrowLeft  className='chef-go'/></Link></div>
        <h2 className='chef1-h2'>Rajesh Patel</h2>
        <div className='chef1-cntnt'>
            <div className='chef-des'>
<p> Rajesh Patel brings the exotic flavors of India to the global culinary stage. With a career spanning decades, Patel has mastered the art of blending spices and creating dishes that tantalize the taste buds. From the bustling street food stalls of Mumbai to the fine dining restaurants of London, Patel's creations transport diners on a flavorful journey through the diverse regions of India. His dedication to authenticity coupled with his innovative techniques has earned him a reputation as a trailblazer in modern Indian cuisine.</p>            
</div>
            <div>
            <img src="https://media.istockphoto.com/id/1408797987/photo/chef-decorating-a-plate-while-working-in-the-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=qAQgOw87OZEg7fnBmiaUel3AZYFCcIkSChUqwBAa7RA=" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Chef2
