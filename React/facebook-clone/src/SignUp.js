import { useState } from "react"

const SignUp = () => {
    const[firstname,setfirstname]=useState;
    const[phone,setphone]=useState;
    const[email,setemail]=useState;
    const[password,setpassword]=useState;
    const[image,setimage]=useState({});

    const display=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <div>
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={display} encType="multipart/form-data">
                <div className="signup-box">
                    <div className="signup-sub-box">
                    <input type="text" placeholder="Enter your name" value={firstname} onChange={(e) => setfirstname(e.target.value)}/>
                    </div>
                    <div className="signup-sub-box">
                    <input type="text" placeholder="Phone" value={phone} onChange={(e) => setphone(e.target.value)}/>
                    </div>
                    <div className="signup-sub-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                    </div>
                    <div className="signup-sub-box">
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className="signup-sub-box">
                    <input type="file" filename="image" onChange={(e)=>setimage(e.target.files[0])}/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>


         
        </div>
    </div>
  )
}

export default SignUp