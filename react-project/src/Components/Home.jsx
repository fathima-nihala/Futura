import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "./Home.css";

import React, { useEffect, useState } from "react";
import Main from "./Main";
import Cart from "./Cart";
import Display from "./Display";
import Profile from "./Profile";
import { apiData } from "../Api/SoyloreApi";
import Searchresult from "./Searchresult";
import Aboutus from "./Aboutus";
import Offer from "./Offer";
import Gift from "./Gift";
import OrdrerMessage from "./OrdrerMessage";
import Footer from "./Footer/Footer";
// import SayloreBody from "./SayloreBody";

const Home = () => {
  // const [state, setstate] = useState([]);
  const [activeNav, setActiveNav] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleNavigationClick = (index) => {
    setActiveNav(index);
  };

  const handleSearch = () => {
    // Ensure that the search query is not empty or consists only of spaces
    if (searchQuery.trim() !== "") {
      // Convert the search query to lowercase for case-insensitive search
      const lowerCaseQuery = searchQuery.toLowerCase();

      // Use filter to find items that match the search query
      const results = apiData.filter((item) => {
        const itemTitle = item.title.toLowerCase();
        const itemCategory = item.category.toLowerCase();
        const itemType = item.type.toLowerCase();

        return (
          itemTitle.includes(lowerCaseQuery) ||
          itemCategory.includes(lowerCaseQuery) ||
          itemType.includes(lowerCaseQuery)
        );
      });

      // Update the UI with the search results
      setSearchResult(results);
      // Set the active navigation to the search results page (assuming 7 represents it)
      setActiveNav(4);
    }
  };

  //nav-sticky

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


  return (
    <div className="brdr">
      <link
        href="https://fonts.googleapis.com/css?family=Covered By Your Grace"
        rel="stylesheet"
      ></link>
      <div className="nav">
        <div className={`nav-main ${isStcky ? 'sick' : ''}`}>
          <div className="nav-content">
            <div className="logo">
              <h1>
                <span className="s">S</span>aylore
              </h1>
            </div>
            <div className="search-button">
              <input
                value={searchQuery}
                type="text"
                placeholder="Search saylor"
                name="search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <BsSearch onClick={handleSearch} />
            </div>
            <div className="content">
              <button className="btn" onClick={() => handleNavigationClick(0)}>
                Home
              </button>
            </div>
            <div className="content">
              <button className="btn" onClick={() => handleNavigationClick(7)}>
                Gifts
              </button>
            </div>
            <div className="content">
              {" "}
              <button className="btn" onClick={() => handleNavigationClick(6)}>
                Offers
              </button>
            </div>
            <div className="content">
              <button className="btn" onClick={() => handleNavigationClick(5)}>
                AboutUs
              </button>
            </div>
            <div className="person-cart-icon">
              <div class="dropdown">
                <button className="drop-button">
                  <BsPerson style={{ fontSize: 26, color: " black" }} />
                </button>
                <div className="dropdown-content">
                  <a href="#">
                    <Link to={"/Signup"}>SignUp</Link>
                  </a>
                  <a href="#" onClick={() => handleNavigationClick(3)}>
                    My Profile
                  </a>
                  <a href="#">Logout</a>
                </div>
              </div>
              <button className="cart" onClick={() => handleNavigationClick(1)}>
                <Link>
                  <BiCart style={{ fontSize: 26, color: " black" }} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {activeNav === 1 && (
          <div>
            <Cart />
          </div>
        )}
        {activeNav === 0 && (
          <div>
            <Main
              setActivnav={setActiveNav}
              setProductDeatails={setProductDetails}
            />
          </div>
        )}
        {activeNav === 2 && (
          <div>
            <Display productDetails={productDetails} />
          </div>
        )}
        {activeNav === 3 && <Profile />}
        {activeNav === 4 && (
          <Searchresult
            searchQuery={searchQuery}
            searchResult={searchResult}
            setActivnav={setActiveNav}
            setProductDeatails={setProductDetails}
          />
        )}
        {activeNav === 5 && <Aboutus />}
        {activeNav === 6 && <Offer />}
        {activeNav === 7 && <Gift />}
      </div>
      {/* <OrdrerMessage/>     */}
      <Footer/>
    </div>
  );
};

export default Home;
