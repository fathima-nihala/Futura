import React, { useState } from 'react'
import Modal from './UI/Modal'

const OrdrerMessage = (props) => {
    // const [close,setClose] = useState(true)
    // const closingHandler=()=>{
    //     setClose(false)
    // }
  return (
    <div>
       
<Modal hideHandler={props.orderhidehandler}>
<h4>order successful</h4>
</Modal>

</div>

   
  )
}

export default OrdrerMessage