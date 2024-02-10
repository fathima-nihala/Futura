import React from 'react'
import './usernav.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import UserLogin from '../../../Login/UserLogin';

const UserNavbar = () => {

    const [isStcky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.addEventListener("scroll", handleScroll);
      }
    }, [])
  
         //to add modal
         const [order, setOrder] = useState()

         const ModalHandler = () => {
             setOrder(true)
         }
     
         const hideHandler = () => {
             setOrder(false)
         }

  return (
    <div>
        <div className={`usrnavbar ${isStcky ? 'sticky' : ""}`}>
      <div className='usrnav-logo'>
        <span className='usrnav-logo-one'>O</span><span className='usrnav-logo-two'>Let</span>
      </div>

      <div className="usrnavbar-center">
        <ul className="usrmenu">
          <li><a><Link to='/' style={{ color: ' rgb(230, 8, 156)', textDecoration: 'none' }}>Home</Link></a></li>
          <li><a>Electronics</a></li>
          <li>
            <details>
              <summary className='sum'>Dress</summary>
              <ul className="usrp-2">
                <li><Link to='/all' className='nav-link'>All</Link></li>
                <li><Link to='/kids'  className='nav-link'>Kids</Link></li>
                <li><Link to='/men' className='nav-link'>Men</Link></li>
                <li><Link to='/women' className='nav-link'>Women</Link></li>
              </ul>
            </details>
          </li>
          <li><a>Beauty</a></li>
        </ul>
      </div>
      <div className='usrnav-search'>
        <input type="text" placeholder="Search.." name="search" />
        <IoSearchOutline />
      </div>
      <div className="usrnavbar-end">
        <div className='usrnav-end-two'><LiaShoppingBagSolid className='usernav-ico' /></div>
        <div className='usrnav-end-one'><BsPerson className='usernav-ico' />
        {/* <div class="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
        </div> */}
        <button onClick={ModalHandler}>login</button>
        </div>
      </div>
    </div>
    {order && <UserLogin orderHideHandler={hideHandler}/>}
    </div>
  )
}

export default UserNavbar