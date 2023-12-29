import React, { useState } from 'react'
import { accountrecovery } from '../ApiCall';

const Recovery = () => {
    const [email,setemail]=useState('');
    // const [password,setpassword]=useState('');
    const onSubmit=async()=>{
        try {
            accountrecovery({email})
            console.log(email);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <input type="email" placeholder='Email here' value={email} onChange={(e)=>setemail(e.target.value)}/>
        {/* <input type="password" placeholder="Enter your password"  value={password} onChange={(e) => setpassword(e.target.value)}/> */}
        <button type='submit' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Recovery
