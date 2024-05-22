import React, { useState,useEffect } from 'react'
import SayloreBody from './SayloreBody';
import mainimg1 from '../images/sayloreimg1.jpg'
import mainimg6 from '../images/sayloreimg4.jpg'
import mainimg5 from '../images/sayloreimg3.jpg'
import mainimg4 from '../images/sayloreimg9.jpg'
import mainimg from '../images/bgimg.png'
import mainimg3 from '../images/sayloreimg.jpg'
import mainimg2 from '../images/sayloreimg8.jpg'
import mainimg7 from '../images/sayloreimg10.jpg'
import { apiData } from '../Api/SoyloreApi';
import './Home.css'



const Main = ({setActivnav,setProductDeatails }) => {
    const [state, setstate] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        async function api() {
            try {
                setstate(apiData);
                setFilterState(apiData)
            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        api()
    }, [])

    const handleClick=(filter)=>{
        setActiveFilter(filter);
        if (filter==='All') {
            setFilterState(state);
        } else{
            const filtered=state.filter(item=>item.category.toLowerCase()===filter.toLowerCase());
            setFilterState(filtered);
        }
    }

  return (
    <div>
        <div className='nav'>
        <div className='saylore-main'>
                    <div className="text">
                    <div className="saylor-text"> <h1><span>S</span>aylore</h1></div>
                       <div className="saylor-text-sub"><h1>Fash<span>i</span>on</h1></div> 
                    </div>
                <div className="saylore-main-img">
                    <img src={mainimg} alt="" />
                </div>
                </div>

                <div className='saylore-main-sub'>
                    <div className="saylore-sub" onClick={() => handleClick('All')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg1} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'All' ? 'active' : ''}`}>All</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub"  onClick={() => handleClick('Men')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg2} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'men' ? 'active' : ''}`}>Men</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub" onClick={() => handleClick('Ladies')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg3} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'ladies' ? 'active' : ''}`}>Ladies</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub" onClick={() => handleClick('Kids')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg4} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'Kids' ? 'active' : ''}`}>Kids</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub" onClick={() => handleClick('Jewelleri')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg5} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewelleri</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub" onClick={() => handleClick('Beauty')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg6} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'Beauty' ? 'active' : ''}`}>Beauty</a></button>
                        </div>
                    </div>
                    <div className="saylore-sub" onClick={() => handleClick('Electronics')}>
                        <div className="saylor-sub-image">
                        <img src={mainimg7} alt="" />
                        </div>
                        <div className="catagories">
                        <button className='catagies-contents'><a  className={`colle ction-button ${activeFilter === 'Electronics' ? 'active' : ''}`}>Electronics</a></button>
                        </div>
                    </div>
                       
                    </div>
                {/* </div> */}
                <div className='saylore-collections'>
                    <SayloreBody values={filterState} setProductDeatails={setProductDeatails} setActivnav={setActivnav} />
                </div>
               
        </div>
    </div>
  )
}

export default Main