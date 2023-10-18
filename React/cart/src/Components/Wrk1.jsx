import React, { useEffect, useState } from 'react'
import './Wrk1.css'
import { BiCart } from "react-icons/bi";
import Wrk1main from './Wrk1main';
import { useDispatch } from 'react-redux';
import { cartProduct } from '../redux/cart';
import { Link } from 'react-router-dom';
// import cart from './cart';
import Cartmain from './Cartmain';



const Wrk1 = () => {
    const dispatch=useDispatch()
    const [state,setstate]=useState(0);

  useEffect(()=>{
    const savedCount=parseInt(localStorage.getItem('cartCount')) || 0;
    setstate(savedCount)
  },[])

    const CartCount=(product)=>{
        setstate(state+1);
        console.log(`user id ${product.id}`);
        dispatch(cartProduct((product)))
        localStorage.setItem('cartCount',state+1)
    }


    return (
        <div className='main-page-div'>
        <div className='nav'>
            <div className='header'>
                <div className="one">
                    <ul>
                        <img src="data:image/png;base64,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" alt="" height="30px" />
                        <li style={{ fontSize: 20, fontWeight: 700 }}>medical.com</li>  &nbsp; &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk" style={{ marginLeft: 870 }}><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                        &nbsp;<li>find our location</li>&nbsp; &nbsp;
                       <Link to={'/Cart'}><BiCart style={{ fontSize: 26 }} /></Link>
                        <li>Items:{state}</li>
                    </ul>
                </div>
            </div>
            <div>
                <Wrk1main CartCount={CartCount}/>
            </div>
        </div>
        </div>
    )
}

export default Wrk1