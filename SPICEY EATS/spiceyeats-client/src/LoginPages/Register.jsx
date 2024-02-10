import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiCircleRemove } from "react-icons/ci";
import './adminlogin.css'
import { userSignup } from '../API/ApiCall';

const Register = () => {
    const [firstname, setfirstname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [image, setImage] = useState(null);

    const displayone = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', image);
        // formData.append('type','user')

        console.log('@@@-data', formData);
        userSignup(formData)
    }
    return (
        <div className='login'>
            <Link to='/'><CiCircleRemove className='goback' /></Link>
            <div className='log-main' onclick="onclick">
                <div className="log-main-one">
                    <div className='log-head'>
                        <h4>Sign In</h4>
                    </div>
                    <div className="log-body">
                        <div className="log-body-one">
                            <div className='log-body-cntnt'>
                                <CgGirl className='log-icon' />
                                <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                            </div>
                            <div className='log-body-cntnt'>
                                <HiOutlineMail className='log-icon' />
                                <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className='log-body-cntnt'>
                                <MdOutlineLockOpen className='log-icon' />
                                <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <div >
                                <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                            </div>

                            <div className='log-btn'>
                                <button className='end' onClick={displayone}>Sign Up</button>
                            </div>
                            <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
