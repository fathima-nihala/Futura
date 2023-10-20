import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi'
import './Home.css'
// import SayloreBody from './SayloreBody';
// import mainimg1 from './images/sayloreimg1.jpg'
// import mainimg6 from './images/sayloreimg4.jpg'
// import mainimg5 from './images/sayloreimg3.jpg'
// import mainimg4 from './images/sayloreimg9.jpg'
// import mainimg from './images/bgimg.png'
// import mainimg3 from './images/sayloreimg.jpg'
// import mainimg2 from './images/sayloreimg8.jpg'
// import mainimg7 from './images/sayloreimg10.jpg'
import React, {  useState } from 'react'
import Main from "./Main";
import Cart from "./Cart";
import Display from "./Display";
// import { apiData } from './Api/SoyloreApi';


const Home = () => {
    const [state, setstate] = useState([]);
    const[activeNav,setActiveNav]=useState(0);
    const [productDetails,setProductDetails]=useState(null);

    // const [filterState, setFilterState] = useState([]);
    // const [activeFilter, setActiveFilter] = useState('All');
    // const[activeNav,setActiveNav]=useState(0);

    // useEffect(() => {
    //     async function api() {
    //         try {
    //             setstate(apiData);
    //             setFilterState(apiData)
    //         }
    //         catch (error) {
    //             console.log('Error fetching data:', error);
    //         }
    //     }
    //     api()
    // }, [])

    // const handleClick=(filter)=>{
    //     setActiveFilter(filter);
    //     if (filter==='All') {
    //         setFilterState(state);
    //     } else{
    //         const filtered=state.filter(item=>item.category.toLowerCase()===filter.toLowerCase());
    //         setFilterState(filtered);
    //     }
    // }

    const handleNavigationClick=(index)=>{
        setActiveNav(index);
     }
    return (
        <div className="brdr">
            <link href='https://fonts.googleapis.com/css?family=Covered By Your Grace' rel='stylesheet'></link>
            <div className='nav'>
                <div className='nav-main'>
                    <div className='nav-content' >
                        <div className='logo'><h1><span className='s'>S</span>aylore</h1></div>
                        <div className='search-button'>
                            <input type="text" placeholder="Search saylor" name="search" />
                            <BsSearch />
                        </div>
                        <div className="content"><button className='btn' onClick={()=>handleNavigationClick(0)}>Home</button></div>
                        <div className="content"><button className='btn'>Shop</button></div>
                        <div className="content"><button className='btn'>AboutUs</button></div>
                        <div className="content"> <button className='btn'>Contacts</button></div>
                        <div className="person-cart-icon">
                        <div class="dropdown">
                            <button className="drop-button"><BsPerson style={{ fontSize: 26, color: ' black' }} /></button>
                            <div className="dropdown-content">
                                <a href="#"><Link to={'/Signup'}>SignUp</Link></a>
                                <a href="#">My Profile</a>
                                <a href="">Logout</a>
                            </div>
                            </div>
                        <button className='cart'onClick={()=>handleNavigationClick(1)}><Link><BiCart style={{ fontSize: 26, color: ' black' }} /></Link></button>
                        </div>
                    </div>
                </div>
                {/* --------------nav-main-------------------- */}
                {/* <div className='saylore-main'>
                    <div className="text">
                    <div className="saylor-text"> <h1><span>S</span>aylore</h1></div>
                       <div className="saylor-text-sub"><h1>Fash<span>i</span>on</h1></div> 
                    </div>
                <div className="saylore-main-img">
                    <img src={mainimg} alt="" />
                </div>
                </div>
                <div> */}
                    {/* ------------------------------------------------- */}
                {/* <div className='saylore-main-sub'>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg1} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('All')} className={`colle ction-button ${activeFilter === 'All' ? 'active' : ''}`}>All</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg2} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Men')} className={`colle ction-button ${activeFilter === 'men' ? 'active' : ''}`}>Men</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg3} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Women')} className={`colle ction-button ${activeFilter === 'Women' ? 'active' : ''}`}>Women</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg4} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Kids')} className={`colle ction-button ${activeFilter === 'Kids' ? 'active' : ''}`}>Kids</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg5} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Jewelleri')} className={`colle ction-button ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewelleri</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg6} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Beauty')} className={`colle ction-button ${activeFilter === 'Beauty' ? 'active' : ''}`}>Beauty</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub">
                        <div className="saylor-sub-image">
                        <img src={mainimg7} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a onClick={() => handleClick('Electronics')} className={`colle ction-button ${activeFilter === 'Electronics' ? 'active' : ''}`}>Electronics</a></button>
                        </div>
                    </div>
                       
                    </div>
                </div>
                */}
                {/* -----------------categories----------------- */}
                {/* <div className='saylore-collections'>
                    <SayloreBody values={filterState} />
                </div> */}
            </div>
                <div>
                    {activeNav===1 && <div><Cart/></div>}
                    {activeNav===0 && <div><Main setActivnav={setActiveNav} setProductDeatails={setProductDetails}/></div>}
                    {activeNav===2 &&  <div><Display productDetails={productDetails}/></div>} 
                   
                </div>
        </div>
    )
}

export default Home