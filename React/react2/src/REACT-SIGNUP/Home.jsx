import React from 'react'
import { useDispatch } from 'react-redux'
import { removeData } from '../Redux/persistconf'

const Home = () => {

    const dispatch=useDispatch()

    function Logoutdata(){
        dispatch(removeData())
    }

  return (
    <div>
        <h2>Do you wanna login?</h2>
        <button onClick={Logoutdata}>Logout</button>
    </div>
  )
}

export default Home