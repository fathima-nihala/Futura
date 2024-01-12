import React from 'react'
import './Dashborad.css'
import { BsBorderStyle } from "react-icons/bs";
// import { FaRegUser } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
// import { PiStorefrontBold } from "react-icons/pi";
// import { MdOutlineAdd } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {removaData} from '../../Redux/userRedux'

const Dashboard = () => {

    const dispatch=useDispatch()
    function Logout(){
        dispatch(removaData())
    }
    return (
        <div className='dashboard' >
            <div className='dashboard-main'>
                <div className='dashboard-cntnts'>
                    <div className='dashboard-title'><span className='dashboard-title-one'>O</span><span className='dashboard-title-two'>Let</span></div>
                    <div className='dashbord-head'>
                        <p>Dashboard</p>
                    </div>


                    <div className='dashboard-link'>
                        <p className='link-p'><BsBorderStyle />
                            <Link to='/' className='dash-link' >Home</Link></p>
                    </div>

                    <div className='dashbord-head'>
                        <p>Quick Menu</p>
                    </div>

                    <div className='dashboard-link'>
                        <p  className='link-p'><PiUsersThreeFill />
                            <Link to='/user' className='dash-link'>Users</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p  className='link-p'><FaEdit />
                            <Link className='dash-link' >ManageProduct</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p  className='link-p'><IoIosAddCircle />
                            <Link to='/adproduct' className='dash-link'>Addproduct</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p  className='link-p'><BiDollar />
                            <Link className='dash-link'>Orders</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><MdOutlineLogout /><Link className='dash-link' onClick={Logout}>Logout</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
