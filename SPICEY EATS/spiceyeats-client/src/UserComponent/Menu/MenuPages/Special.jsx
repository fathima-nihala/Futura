import React from 'react'
import './special.css'
import { Link } from 'react-router-dom'

const Special = () => {
  return (
    <div className="special">
        <div className="special-left">
            <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.141120536.1706946110&semt=ais" alt=""/>  
        </div>
        <div className="special-right">
            <p className="special-sub-hd"><span>&#9733;</span> special dish <span>&#9733;</span></p>
            <h2 className="special-hd">SpiceyEats Special</h2>
            <p className='special-p'>Indulge in a culinary journey like no other  <br />with our exquisite selection of special dishes. <br /> Each dish is meticulously crafted by our master <br /> chefs, combining the finest ingredients and <br /> culinary expertise to tantalize your taste <br /> buds and elevate your dining experience. <br /> just starting from </p>
            <h3 className="dol">₹ 599.0 &nbsp;<span className="dol-sub">₹999.0</span></h3>
            <button className="special-btn"><Link className='special-btn-link'>View All Menu</Link></button>
        </div>
    </div>
  )
}

export default Special
