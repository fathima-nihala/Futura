import React from 'react'
import './Register.css'
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { RegisterData } from '../ApiCall/ApiCall';


function Register() {

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState({});

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);

    const display = async (e) => {
        e.preventDefault();

        console.log('signUp Response:', formData);
        await RegisterData(formData);

    };
    return (
        <div className='register'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                    <div className='reg-head'>
                        <h4>Register</h4>
                    </div>
                    <form encType='multipart/form-data' onSubmit={display}>
                        <div className='reg-body'>
                            <div className='reg-body-one'>
                                <div className='reg-body-cntnt'>
                                    <CgGirl className='reg-icon' />
                                    <input type="text" name='' placeholder='Name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                                <div className='reg-body-cntnt'>
                                    <HiOutlineMail className='reg-icon' />
                                    <input type="email" placeholder='Email' name='' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='reg-body-cntnt'>
                                    <MdOutlineLockOpen className='reg-icon' />
                                    <input type="password" placeholder='Passoword' name='' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='reg-body-img'>
                                    <input type='file' name='image' accept='image' onChange={(e) => setImage(e.target.files[0])} />
                                </div>
                                <div className='reg-btn'>
                                    <button >Create Account</button>
                                </div>
                                <div className='reg-para'>
                                    <p>Already have an account?<Link to='/login' className='reg-link'>Login</Link></p>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register
