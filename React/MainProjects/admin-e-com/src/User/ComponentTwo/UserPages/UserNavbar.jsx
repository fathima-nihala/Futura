import React from 'react'
import './usernav.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Link } from 'react-router-dom'
import UserLogin from '../../../Login/UserLogin';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { productView } from '../../../API/ApiCall';
// import CartItem from '../CartPage/CartItem';

const UserNavbar = () => {
  const itemaaa = useSelector((state) => state.userLogin.userLoginInfo[0]);

  //for scrolling & sticky navbar
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

  //to add modal login button
  const [order, setOrder] = useState()
  const [proforder, setProfOrder] = useState(false);


  const ModalHandler = () => {
    setOrder(true)
  }

  const hideHandler = () => {
    setOrder(false)
    setProfOrder(false)
  }

  //for modal profile
  const ProfhandleOrderItem = () => {
    setProfOrder(true);
  };


  //search

  const [search, setSearch] = useState('')
  console.log(search);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedFilter, setSelectedFilter] = useState('');
  // const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);


  // const handleSelectChange = (e) => {
  //   setSelectedFilter(e.target.value);
  // };

  // ###


  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedFilter, setSelectedFilter] = useState('');
  // const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  // const filterOptions = ['', 'women', 'men', 'kids']; // Add more filter options as needed

  // const handleSearchInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSelectChange = (e) => {
  //   setSelectedFilter(e.target.value);
  // };

  // const handleSearchBarFocus = () => {
  //   setIsSearchBarFocused(true);
  // };

  // const handleSearchBarBlur = () => {
  //   setIsSearchBarFocused(false);
  // };

  // const getPlaceholderText = () => {
  //   if (!searchQuery && isSearchBarFocused) {
  //     return `Search ${selectedFilter ? selectedFilter : '...'}`;
  //   }
  //   return '';
  // };


  // useEffect(() => {
  //   const getproduct = async (id) => {
  //     console.log('getproduct', id);
  //     try {
  //       const res = await productView(id);
  //       setSearchQuery(res.data);
  //       console.log("kids", res.data);
  //     } catch (error) {
  //       console.error('Error fetching product data:', error);
  //     }
  //   }
  //   getproduct()
  // }, [])

  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);
  //   const filteredResults = filteredData.filter(item =>
  //     item.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredData(filteredResults);
  // };


  //

  // const getTotalCartItems = (CartItem) => {
  //   let totalItems = 0;
  //   for (const item in CartItem) {
  //     if (CartItem[item] > 0) {
  //       totalItems += CartItem[item]
  //     }
  //   }
  //   return totalItems
  // }

  return (
    <div>
      <div className={`usrnavbar ${isStcky ? 'sticky' : ""}`}>
        <div className='usrnav-logo'>
          <span className='usrnav-logo-one'>O</span><span className='usrnav-logo-two'>Let</span>
        </div>

        <div className="usrnavbar-center">
          <ul className="usrmenu">
            <li><a><Link to='/' style={{ color: ' rgb(230, 8, 156)', textDecoration: 'none' }}>Home</Link></a></li>
            <li><Link to='/all' className='nav-link'>All</Link></li>
            <li><Link to='/women' className='nav-link'>Women</Link></li>
            <li><Link to='/kids' className='nav-link'>Kids</Link></li>
            <li><Link to='/men' className='nav-link'>Men</Link></li>

          </ul>
        </div>
        <div className='usrnav-search'>
          <Form>
            <div className='nav_inp'>
              <input type='text' placeholder='Search Here' onChange={(e) => setSearch(e.target.value)} />
              <IoSearchOutline />

            </div>
          </Form>
          {/* <Link to='/all'>
            <input type="text" placeholder="Search.." name="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <IoSearchOutline />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
            </select>

          </Link> */}
          {/* #### */}

          {/* <Link to='/all'>
            <input
              type="text"
              placeholder={getPlaceholderText()}
              name="search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarBlur}
            />
            <IoSearchOutline />
            {isSearchBarFocused && (
              <div className="filter-options">
                <select
                  className='sel-nav'
                  value={selectedFilter}
                  onChange={handleSelectChange}
                >
                  <option value="">All</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
            )}
          </Link> */}


          {/* <ul>
            {filteredData.map(item => (
              <li key={item.id}><Link to={`/product/${item.id}`}>{item.category}</Link>
              </li>
            ))} */}
          {/* </ul> */}
        </div>
        <div className="usrnavbar-end">
          <div className='usrnav-end-two'><Link to='/addtocart' className='nav-addto'><LiaShoppingBagSolid className='usernav-ico' /></Link>
            {/* <div className='nav-cart-count'>{getTotalCartItems()}</div> */}
          </div>

          {/* <div class="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
        </div> */}
          {/* {itemaaa ? <div className='usrnav-end-one'><BsPerson className='usernav-ico' onClick={ProfhandleOrderItem} /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>} */}
          {itemaaa ? <div className='usrnav-end-one'><img src={`./Profile/${itemaaa.image}`} onClick={ProfhandleOrderItem} className='usernav-ico2' /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>}

          {/* <button onClick={ModalHandler}>login</button> */}
          {/* value={searchQuery} onChange={handleSearch} */}
        </div>
      </div>
      {order && <UserLogin orderHideHandler={hideHandler} />}
      {proforder && <UserProfile ProforderHideHandler={hideHandler} />}
    </div>
  )
}

export default UserNavbar