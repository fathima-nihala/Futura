import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/persistconf'
import { getProfile } from './ApiCall'

const Navbar = () => {
  const [data1, setData1] = useState(false)
  const fullData = useSelector((state) => state.Login.loginInfo)

  console.log('hset data =', fullData);


  const dispatch = useDispatch()

  const display = () => {
    dispatch(removeData())
  }

  const profile = async () => {
    setData1(true)
  }
  return (
    <div>
      <div>
        <button onClick={profile}>Profile</button>
        <button onClick={display}>Logout</button>
      </div>

      <div>
          <div>
            {data1 && fullData.map((value, index) => (
              <div key={index}>
                <h1>{value.firstname}</h1>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Navbar