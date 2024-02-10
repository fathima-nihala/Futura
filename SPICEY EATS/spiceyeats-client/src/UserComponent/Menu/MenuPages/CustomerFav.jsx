import React from 'react'
import './customerfav.css'
import { Link } from 'react-router-dom'

const CustomerFav = () => {
    return (
        <div>
            <p className="flavours">CUSTOMER FAVORITES</p>
            <div className="flavours-menu">
                <div className="flav-menu-one">
                    <Link>
                        <img className="flav-menu-one-img" src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=0&k=20&c=gsS00tWuoGp0_PQNEIIRII-qsCr42TSRujwBzP7P3Ls=" alt="" />
                    </Link>
                    <p className="burg">Burgers</p>
                    <p className="view-menu">view menu</p>
                </div>
                <div className="flav-menu-one">
                    <h2 className="falv-head">Popular Catagories</h2>
                    <div>
                        <p className="falv-para">Where Each Plate Waves a Story of</p>
                        <p className="falv-para">Culinary Mastery & Passionate </p>
                        <p className="falv-para">Craftsmanship</p>
                    </div>
                    <Link>
                        <img className="flav-menu-one-img" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <p className="burg">Fries</p>
                    <p className="view-menu">view menu</p>
                </div>
                <div className="flav-menu-one">
                    <Link>
                        <img className="flav-menu-one-img" src="https://img.freepik.com/premium-photo/cup-coffee-with-coffee-beans-top-it_25996-4931.jpg?size=626&ext=jpg&ga=GA1.1.141120536.1706946110&semt=sph" alt="" />
                    </Link>
                    <p className="burg">Coffee</p>
                    <p className="view-menu">view menu</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerFav