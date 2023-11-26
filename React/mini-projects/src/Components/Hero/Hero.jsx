import './Hero.css'
import hand_icon from'../Assets/hand-icon.png'
import arrow_icon from '../Assets/arrow-icon.png'
import hero_image from '../Assets/hero-img.png'
import LatestCollection from '../../Pages/LatestCollection'
// import LatestCollection from '../../Pages/LatestCollection'
// import { useEffect, useState } from 'react'
// import all_product from '../Assets/all_product'
// import {useHistory} from 'react-router-dom'
const Hero = () => {

  // const history=useHistory()

  const handleLatestClick=()=>{
    // history.push('/latest');
    <LatestCollection/>
    console.log('Latest Collection clicked!',);
  }
//   const[state,setState]=useState([]);
//   const [filterState,setFilterState]=useState([]);
//   const[activeFilter,setActiveFilter]=useState('Latest Collection');

//   useEffect(()=>{
//       async function api(){
//         try {
//           setState(all_product);
//           setFilterState(all_product)
//         } catch (error) {
//           console.log('Error fetching:',error);
//         }
//       }
//       api()
//   },[])

//  const handleClick=(filter)=>{
//   setActiveFilter(filter);
//   if (filter==='Latest Collection') {
//     setFilterState(state)
//   }
//  }

  return (
    <div className='hero'>
     <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={()=>{handleLatestClick()}}>
            <div>Latest Collection</div> 
            <img src={arrow_icon} alt="" />
        </div>
     </div>
     <div className="hero-right">
        <img src={hero_image} alt="" />
     </div>
    </div>
  )
}

export default Hero