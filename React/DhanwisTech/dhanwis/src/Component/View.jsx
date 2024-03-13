import React, { useEffect, useState } from 'react'
import { regView } from './Api';
import './register.css'

const View = ({id}) => {
    console.log('viewiddddddd',id);

    const [items,setItems]=useState('')

    useEffect(()=>{
        const dataget = async()=>{
            const res = await regView(id)
            console.log(res,'ghjhju');
            setItems(res)
        }
        dataget()
    })
  return (
    <div className='view'>
      <div className='view-container'>
        {items ? (
            <div>
                <h2>UserDetais</h2>
                <p>Name:{items.name}</p>
                <p>Email:{items.email}</p>
                <p>Phone:{items.phone}</p>
                <p>Gender:{items.gender}</p>
            </div>
        ):(
            <div>
                <p>Loading...</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default View
