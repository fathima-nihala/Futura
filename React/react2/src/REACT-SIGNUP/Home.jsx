import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/persistconf'

const Home = () => {

  const data=useSelector((state)=>state.Login.loginInfo)
  console.log("im mad",data);

    const dispatch=useDispatch()

    function Logoutdata(){
        dispatch(removeData())
    }

  return (
    <div>
        <h2>Do you wanna login?</h2>

        <br />
        {data.map((datass)=>{
          return(
            <div>
             <h3>{datass._id} </h3> 
             <h4>{datass.firstname}</h4> 
              <p>{datass.email}</p>
              <p>{datass.age}</p>
              <p>{datass.address}</p>
            </div>
          )
        })}

<button onClick={Logoutdata}>Logout</button>

    </div>
  )
}

export default Home