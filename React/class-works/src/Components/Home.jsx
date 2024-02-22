import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeData } from '../Redux/userRedux'
import navlogo from '../Components/Assets/navlogo.png'
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import './Home.css';
import { Form, Link } from 'react-router-dom';
import { all_product } from './Assets/api'

const Home = () => {
    const dispatch = useDispatch()
    // const data=useSelector((state)=>state.Login.loginInfo)
    // console.log("u r such a cutie pie",data);
    const [search, setSearch] = useState('')
    console.log(search);


    function Logoutdata() {
        dispatch(removeData())
        // dispatch()
    }
    return (
        <div >
            <div className='navbar'>
                <div className='logo'>
                    <img src={navlogo} alt="" />
                    <Form>
                        <div className='nav_inp'>
                            <IoSearchOutline />
                            <input type='text' placeholder='Search Facebook' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </Form>

                </div>
                <div className='nav_elements'>
                    <div className="nav_option">
                        <div className='nav-prof--active'>
                            <AiFillHome className='nav-prof-one' style={{ width: "25", height: '25' }} /><p>Home</p> &nbsp; &nbsp; &nbsp;
                        </div>
                    </div>
                    <div className="nav_option">
                        <div className='nav-prof'>
                            <IoPersonCircleOutline className='nav-prof-one' style={{ width: "25", height: '25' }} /><p><Link className="link-text" to="/prof" style={{ textDecoration: 'none', color: "black" }}>Profile</Link></p>
                        </div>
                    </div>
                    <div className="nav_option">
                        <div className='nav-prof'>
                            <FiLogOut className='nav-prof-one' style={{ width: "25", height: '25' }} /><p onClick={Logoutdata} className='nav_btn'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_container'>
                <h2>What Makes Us Different</h2>
                <div className='home_body'>
                    {/* <img src="https://t4.ftcdn.net/jpg/06/67/22/65/240_F_667226566_jmNlFL4JrquOUe0NSPx62RbWHWOtM181.jpg" alt="" /> */}
                    <div className="gallery">
                        <a target="_blank" href="https://t3.ftcdn.net/jpg/06/66/87/76/240_F_666877698_Dp3ky0eJcT5Vogq6hLpE2U3auZ01SVHl.jpg">
                            <img src="https://t3.ftcdn.net/jpg/06/66/87/76/240_F_666877698_Dp3ky0eJcT5Vogq6hLpE2U3auZ01SVHl.jpg" alt="" />
                        </a>
                        <div className="desc">Data Security concept with abstract high speed technology motion blur, topic of AI and automation.</div>
                        <button className="ga-btn">More</button>

                    </div>

                    <div class="gallery">
                        <a target="_blank" href="https://as2.ftcdn.net/v2/jpg/05/99/74/03/1000_F_599740318_YpZIXZ4IqJ85Fz2mm1VpzgyXyMKUDEmv.jpg">
                            <img src="https://as2.ftcdn.net/v2/jpg/05/99/74/03/1000_F_599740318_YpZIXZ4IqJ85Fz2mm1VpzgyXyMKUDEmv.jpg" alt="" />
                        </a>
                        <div className="desc">A person using a streaming service, like Netflix  which uses AI algorithms,based on their viewing and listening history</div>
                        <button className="ga-btn">More</button>
                    </div>
                    <div class="gallery">
                        <a target="_blank" href="https://as2.ftcdn.net/v2/jpg/06/58/17/83/1000_F_658178306_o2p3msLF0fQBlG20lg0fMmnQHXN9dXkz.jpg">
                            <img src="https://as2.ftcdn.net/v2/jpg/06/58/17/83/1000_F_658178306_o2p3msLF0fQBlG20lg0fMmnQHXN9dXkz.jpg" alt="" />
                        </a>
                        <div className="desc">Glowing modern processor. Big illuminated graphic processor surrounding by other electrical components.</div>
                        <button className="ga-btn">More</button>
                    </div>
                </div>
            </div>
            <div>
                <tr>
                    <th>name</th>
                    <th>catagory</th>
                    <th>profile</th>
                    <th>price</th>
                </tr>
                <div>

                </div>
                {all_product.filter((item) => {

return search.trim() === '' || (item.catagory && item.catagory.toLocaleUpperCase().includes(search.trim().toLocaleUpperCase()));

                })
                    .map((item) => (
                        <div>
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.catagory}</th>
                                <th>{item.profile}</th>
                                <th>{item.new_price}</th>
                            </tr>

                        </div>

                    ))}
            </div>
        </div>
    )
}

export default Home