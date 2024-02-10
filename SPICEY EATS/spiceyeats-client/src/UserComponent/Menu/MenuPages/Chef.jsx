import React from 'react'
import './chef.css'
import { Link } from 'react-router-dom'

const Chef = () => {
  return (
    <div className="chef">
        <h1 className="chef-main-head">Meet Our Chef</h1>
        <div className="chef-cntnr">
            <div className="chef-des">
                <Link to='/williumjoe' className='chef-link'>
                <img src="https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM=" alt="" />
                </Link>
                <p className="master">Master chief</p>
                <h3>Wiiliom Joe</h3>
            </div>
            <div className="chef-des">
            <Link to='/rajeshpatel'>
                <img src="https://media.istockphoto.com/id/1408797987/photo/chef-decorating-a-plate-while-working-in-the-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=qAQgOw87OZEg7fnBmiaUel3AZYFCcIkSChUqwBAa7RA=" alt="" />
                </Link>
                <p className="master">Master chief</p>
                <h3>Rajesh Patel</h3>
            </div>
            <div className="chef-des">
            <Link to='/lila'>
                <img  src="https://media.istockphoto.com/id/155095175/photo/chief.jpg?s=612x612&w=0&k=20&c=2dJKVmeAfeDRhdbuWk06VZNnd7xogk_MlPkInhHspDY=" alt="" />
                </Link>
                <p className="master">Master chief</p>
                <h3>Lila Nguyens</h3>
            </div>
        </div>
        <div className="yukon-imgs">
        <div className="yu-img"><img src="https://media.istockphoto.com/id/1203053489/photo/the-concept-of-cooking-meat-the-chef-cook-salt-on-the-cooked-steak-on-a-black-background-a.jpg?s=612x612&w=0&k=20&c=vOg4nRN_eW78kG1C3JZwkcBd88TQCjZFgnG2cjOvoxs=" alt=""/></div>
        <div  className="yu-img"><img src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=" alt=""/></div>
        <div className="yu-img"><img src="https://media.istockphoto.com/id/924005570/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-black-background.jpg?s=612x612&w=0&k=20&c=WL2JgXWo8HOdTDnBJwjTg63MA4ItJG0efsJgF1OrTM4=" alt=""/></div>
        <div className="yu-img"><img src="https://media.istockphoto.com/id/1289396613/photo/various-chocolate-candies-on-a-black-background-sprinkled-with-chocolate-chips.jpg?s=612x612&w=0&k=20&c=V_dmqF-6f3QU2HPQqB3ux3N19mRyQFvHraOI0Fy6XKE=" alt=""/></div>
        <div className="yu-img" ><img src="https://media.istockphoto.com/id/1213640567/photo/grilled-ribeye-beef-steak-with-rosemary-and-salt.jpg?s=612x612&w=0&k=20&c=nu0I2p8I9O6d2nCZaVGiZ2hCjva3iAdE4vWZNqFikho=" alt=""/></div>
        <div className="yu-img"><img src="https://media.istockphoto.com/id/1295796231/photo/cheese-burger-with-bacon-on-black-dark-background.jpg?s=612x612&w=0&k=20&c=TV5fZ_GZTJeIBp3xqWNgybVmrYC85UcVDTbJh3XOHN4=" alt=""/></div>
    </div>
    </div>
  )
}

export default Chef
