import React, { useEffect, useState } from 'react'
import './Wrk1.css'
import axios from 'axios';

const Wrk1main = ({CartCount}) => {
    const [state, setstate] = useState([]);
    useEffect(() => {
        async function display() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setstate(res.data)
        }
        display()
    }, [])
    const a = state.filter((data) => {
        return data.id <= 4  
    })
    return (
        <div className='body-main'>
            <div className='card'>
            {a.map((user) => (
                <div className='card-body' key={user.id}>
                    <h4>{user.id}</h4>
                    <img src={user.thumbnailUrl} alt="" />
                    <h2>{user.title}</h2>
                    <button onClick={()=>{CartCount(user.id)}}>Add to cart</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Wrk1main