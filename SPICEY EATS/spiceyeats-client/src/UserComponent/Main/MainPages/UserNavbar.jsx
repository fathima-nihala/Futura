import React, { useEffect, useState } from 'react'
import './usernavbar.css'
import { Link } from 'react-router-dom'
import Login from '../../../LoginPages/Login';

const UserNavbar = () => {
    //to stick navbar
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleSroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        };
        window.addEventListener("scroll", handleSroll);

        return () => {
            window.addEventListener("scroll", handleSroll)
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
        <div className={`nav ${isSticky ? 'sticky' : ''}`}>
            <div className="nav-logo">
                <span className="logo1">SPIC<span className="logo1-sub1">E</span>Y<span className="logo1-sub1">E</span>ATS</span>
            </div>
            <div className="nav-center">
                <ul className="nav-menu">
                    <li className="navmenu-menu"><Link className='navmenu-menulink'>Menu</Link></li>
                    <li><Link className='navmenu-link'>All</Link></li>
                    <li><Link className='navmenu-link'>Non-veg</Link></li>
                    <li><Link className='navmenu-link'>Veg</Link></li>
                    <li><Link to='/about' className='navmenu-link'>About</Link></li>
                </ul>
            </div>
            <div className="nav-end">
                <button onClick={ModalHandler}>Login</button>
            </div>
            {order && <Login orderHideHandler={hideHandler} />}
        </div>

    )
}

export default UserNavbar