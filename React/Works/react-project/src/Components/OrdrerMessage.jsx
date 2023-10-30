import React, { useState } from 'react'
import Modal from './UI/Modal'

const OrdrerMessage = () => {
    const [close,setClose] = useState(true)
    const closingHandler=()=>{
        setClose(false)
    }
  return (
    <div>
        {close&&
<Modal hideHandler={closingHandler}>
<h4>order successful</h4>
</Modal>
}
</div>

   
  )
}

export default OrdrerMessage