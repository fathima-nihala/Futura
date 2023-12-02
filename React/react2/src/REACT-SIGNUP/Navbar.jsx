import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/persistconf'
const Navbar = () => {

    const data=useSelector((state)=>state.Login.loginInfo)
    const id=data[0]&& data[0]._id
    console.log(id);


    const dispatch=useDispatch()

    const display=()=>{
        dispatch(removeData())
    }

    function profile(){

    }
  return (
    <div>
        {/* <button onClick={profile}>Proofile</button>
        <button onClick={display}>Logout</button> */}

        haaaiiii
    </div>
  )
}

export default Navbar