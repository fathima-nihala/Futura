import React from 'react'
import './chef1.css'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Chef3 = () => {
    return (
        <div className='chef1'>
            <div className='chef-g'><Link to='/'><FaArrowLeft className='chef-go' /></Link></div>
            <h2 className='chef1-h2'>Lila Nguyen</h2>
            <div className='chef1-cntnt'>
                <div className='chef-des'>
                    <p>Hailing from Hanoi, Lila Nguyen is a rising star in the world of Vietnamese cuisine. Inspired by her grandmother's recipes and guided by a deep respect for traditional Vietnamese cooking techniques, Nguyen creates dishes that capture the essence of Vietnamese culture. Her commitment to sourcing the freshest ingredients and her meticulous attention to detail have garnered praise from both critics and diners alike. With each dish, Nguyen invites diners to experience the vibrant flavors and rich history of Vietnam, ensuring that her culinary legacy continues to thrive.</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/155095175/photo/chief.jpg?s=612x612&w=0&k=20&c=2dJKVmeAfeDRhdbuWk06VZNnd7xogk_MlPkInhHspDY=" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Chef3
