import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Api() {
    const[state,setstate]=useState([])
    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setstate(res.data)
        }
        display()
    },[])
    console.log('state data',state);
  return (
    <div>
        {state.map((user) => (
         <>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.address.city}</li>
        </>
        ))}
    </div>
  )
}

export default Api