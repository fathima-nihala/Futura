import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { LoginDatass } from '../API/ApiCall'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLockOpen } from "react-icons/md";
import './login.css'
import { UserLoginData } from '../API/ApiCall';
import { useDispatch } from 'react-redux'


const Login = (props) => {

    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    const dispatch = useDispatch()

    const displayone = async () => {
        console.log({ email, password });
        try {
            await UserLoginData({ email, password },dispatch);
        } catch (error) {
            console.log("error in pass", error);
        }
    }
    
    return (
        <div>
            <Modal hideHandler={props.orderHideHandler}>

                <div className='log-head'>
                    <h4>Sign In</h4>
                </div>
                <div className="log-body">
                    <div className="log-body-one">
                        <div className='log-body-cntnt'>
                            <HiOutlineMail className='log-icon' />
                            <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className='log-body-cntnt'>
                            <MdOutlineLockOpen className='log-icon' />
                            <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='log-frgt'>
                            <p>Forget Password?</p>
                        </div>

                        <div className='log-btn'>
                            <button className='end' onClick={displayone}>Sign In</button>
                        </div>
                        {/* <p className='end-para-two'>Are you an admin? <Link to='/adminlogin' className='end-link'>Login Now</Link></p> */}

                        <div className='log-para'>
                            <p className='end-para'>don't have an account?<Link to='/register' className='end-link'>Signup Now</Link></p>
                        </div>


                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default Login