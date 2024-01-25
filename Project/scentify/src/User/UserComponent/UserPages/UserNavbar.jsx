import React, { useEffect, useState } from 'react'
import './Usernav.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import UserProfile from '../UserProfile';

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

  const [user, setUser] = useState(null); // Assume you have some user state

  const showModal = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.style.display = 'block';
    }
  };

  return (
    <div className={`navbar ${isStcky ? 'sticky' : ""}`}>
    <div className='nav-logo'>
      <span className='nav-logo-one'>S</span><span className='nav-logo-two'>centify</span>
    </div>

    <div className="navbar-center">
      <ul className="menu">
        <li><a><Link to='/' style={{ color: '#A87149', textDecoration: 'none' }}>Fragrance</Link></a></li>
        <li><a>Deodorant</a></li>
        <li>
          <details className='usenav-det'>
            <summary className='sum'>New Arrivals</summary>
            <ul className="p-2">
              <li><a>All</a></li>
              <li><a>Men</a></li>
              <li><a>Women</a></li>
            </ul>
          </details>
        </li>
        <li><a>Body Spary</a></li>
      </ul>
    </div>

    <div className='nav-search'>
      <input type="text" placeholder="Search.." name="search" />
      <IoSearchOutline />
    </div>

    <div className="navbar-end">
      <div className='nav-end-two'><LiaShoppingBagSolid className='nav-ico' /></div>
      <div className='nav-end-one'><BsPerson className='nav-ico' />
      <div class="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
      </div>
      </div>
    </div>
    <button className='nav-btn'><Link to='/login' className='nav-btn-link'>Login</Link></button>
    {/* <div> */}
    {/* {user ? (
        <UserProfile user={user} />
      ) : (
        <button
          onClick={showModal}
          className="custom-btn" // Add your custom styles here
        >
          Login
        </button>
      )}
      <UserProfile /> */}
      
    {/* </div> */}

  </div>
  )
}

export default UserNavbar