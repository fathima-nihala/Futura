import React, { useState } from 'react'
import Model from '../Components/Model/Model'

const OrderMessage = () => {
    const [close,setClose] = useState(true)
    const closingHandler=()=>{
        setClose(false)
    }
  return (
    <div>
        {close&&<Model hideHandler={closingHandler}>
            <h4>Successfull</h4>
            </Model>}
    </div>
  )
}

export default OrderMessage