import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {  getProfile } from '../ApiCall'
import { Link } from 'react-router-dom'
import './HomeNav.css'

const HomeNav = () => {

  const [data2, setData2] = useState();
    // const [profile,setProfile]=useState('')


  const allData = useSelector((state) => state.Login.loginInfo)
  console.log(allData, 'alll data in homenav');

  if (allData) {
    var Id = allData[0] && allData[0]._id;
  }
  console.log("iddd in if", Id);

  const display = async () => {
    var data = await getProfile(Id)
    console.log("data?",data.data);
    setData2(data.data)
  }
  console.log('%%%%', data2);



  return (
    <div className=''>
      <div className='nav-main'>
        <div className='nav-search'>
          <input type="text" placeholder='search here' />
          <button>search</button>
        </div>
        <div className='nav-list'>
          <ul>
            <li>Home</li>
            <li><Link to='/update' style={{textDecoration:'none',color:'black'}}>Update</Link></li>
            <li onClick={display}>Profile</li>
          </ul>

        </div>
      </div>
      <div className='mapping'>
        <h1 className='head'>Your Details....</h1>
        <div className='map-data'>
          <div >
            <h3>{data2 && data2.firstname}</h3>
            <h4>{data2 && data2.email}</h4>
          </div>

        </div>
      </div>
     


    </div>
  )
}

export default HomeNav