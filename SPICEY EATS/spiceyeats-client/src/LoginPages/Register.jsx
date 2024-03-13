// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { MdOutlineLockOpen } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { CiCircleRemove } from "react-icons/ci";
// import {FaGoogle} from 'react-icons/fa'
// import './adminlogin.css'
// import { userSignup } from '../API/ApiCall';

// const Register = () => {
//     const [firstname, setfirstname] = useState('');
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');
//     const [image, setImage] = useState(null);

//     const displayone = async (e) => {
//         e.preventDefault();

//         let formData = new FormData();
//         formData.append('firstname', firstname);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('image', image);
//         // formData.append('type','user')

//         console.log('@@@-data', formData);
//         userSignup(formData)
//     }
//     return (
//         <div className='login'>
//             <Link to='/'><CiCircleRemove className='goback' /></Link>
//             <div className='log-main' onclick="onclick">
//                 <div className="log-main-one">
//                     <div className='log-head'>
//                         <h4>Sign In</h4>
//                     </div>
//                     <div className="log-body">
//                         <div className="log-body-one">
//                             <div className='log-body-cntnt'>
//                                 <CgGirl className='log-icon' />
//                                 <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
//                             </div>
//                             <div className='log-body-cntnt'>
//                                 <HiOutlineMail className='log-icon' />
//                                 <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
//                             </div>
//                             <div className='log-body-cntnt'>
//                                 <MdOutlineLockOpen className='log-icon' />
//                                 <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
//                             </div>
//                             <div >
//                                 <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
//                             </div>

//                             <div className='log-btn'>
//                                 <button className='end' onClick={displayone}>Sign Up</button>
//                             </div>
//                             <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register

import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiCircleRemove } from "react-icons/ci";
import { FaGoogle } from 'react-icons/fa';
import './adminlogin.css';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        createUser(email, password)
            .then(() => {
                alert('Account creation successful!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error creating user:", error);
                // Handle error, if needed
            });
    }

    return (
        <div className='login'>
            <Link to='/'><CiCircleRemove className='goback' /></Link>
            <div className='log-main' onclick="onclick">
                <div className="log-main-one">
                    <div className='log-head'>
                        <h4>Sign Up</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="log-body">
                            <div className="log-body-one">
                                <div className='log-body-cntnt'>
                                    <CgGirl className='log-icon' />
                                    <input type="text" placeholder='Name' {...register("name")} />
                                </div>
                                <div className='log-body-cntnt'>
                                    <HiOutlineMail className='log-icon' />
                                    <input type="email" placeholder="Email" {...register("email")} />
                                </div>
                                <div className='log-body-cntnt'>
                                    <MdOutlineLockOpen className='log-icon' />
                                    <input type="password" placeholder="Password" {...register("password")} />
                                </div>
                                <div className='log-btn'>
                                    <button className='end' type="submit">Sign Up</button>
                                </div>
                                <p className='end-para'>Already have an account? <Link to='/login' className='end-link'>Sign in Now</Link></p>
                                <div className='face-ico'>
                                    <FaGoogle className='facebook' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
