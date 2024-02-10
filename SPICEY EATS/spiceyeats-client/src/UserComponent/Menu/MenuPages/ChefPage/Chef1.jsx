import React from 'react'
import './chef1.css'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Chef1 = () => {
  return (
    <div className='chef1'>
        <div className='chef-g'><Link to='/'><FaArrowLeft  className='chef-go'/></Link></div>
        <h2 className='chef1-h2'>Wiiliom Joe</h2>
        <div className='chef1-cntnt'>
            <div className='chef-des'>
                <p>Hailing from the vibrant streets of Hanoi, Chef williom joe is a culinary virtuoso known for her mastery of Vietnamese cuisine. Growing up in a family of passionate food enthusiasts, she inherited a deep appreciation for the rich tapestry of flavors and ingredients that define Vietnamese cooking. With a background in traditional culinary arts and a penchant for creativity, Chef Sophie's dishes are a harmonious blend of authenticity and innovation. From fragrant pho to delicate spring rolls, each dish reflects her dedication to preserving the essence of Vietnamese gastronomy while embracing modern techniques and global influences. With Chef Sophie's culinary creations, embark on a culinary journey through the bustling markets and tranquil landscapes of Vietnam, where every bite tells a story of tradition, culture, and passion.</p>
            </div>
            <div className='chef-im'>
            <img src="https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM=" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Chef1
