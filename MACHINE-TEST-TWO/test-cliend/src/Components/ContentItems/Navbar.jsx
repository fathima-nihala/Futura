import React from 'react'
import './navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='nav-nav'>
          <div className='nav-left'>
          <IoSearchOutline style={{ marginTop: '5', marginLeft: '10' }} />
          <input type="text" placeholder='Search here..' className='nav-inp' />
          </div>
          <div className='nav-center'>
          <BsPerson className='nav-ico' />
          </div>
            <button className='nav-btn-p' ><MdOutlineLogout/>Logout</button>
        </div>
      </div>
    )
}

export default Navbar
