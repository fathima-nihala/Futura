import React from 'react'
import './blog.css'
// import { BsSearch } from 'react-icons/bs';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

function Blog() {
  return (
    <div className='main'>
        <div className='navbar'>
            <div className='name'>
                <h3>John Wick</h3>
                <h4>Your Productivity Guru</h4>
            </div>
            <div className='link'>
                <a href="#">Subscribe</a>
                <a href="#">contact</a>
                <div className='search'>
                    {/* <BsSearch/>
                    <input type="text" placeholder='Enter the prompt'/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog