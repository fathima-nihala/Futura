import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { testSignupData } from '../../API/ApiCall';
import './register.css';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('password', password);

        console.log('formData', formData);

        // Call your signup API function here
        // testSignupData(formData);
        testSignupData({ email, password, firstname }, formData)
    }

    return (
        <div>
            <div className='register'>
                <div className='reg-main'>
                    <div className='reg-main-one'>
                        <div className='reg-head'>
                            <h4>Sign Up</h4>
                        </div>
                        <form encType='multipart/form-data' onSubmit={handleSubmit}>
                            <div className='reg-body'>
                                <div className='reg-body-one'>
                                    <div className='reg-body-cntnt'>
                                        <input type="text" placeholder='Name' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />                                    </div>
                                    <div className='reg-body-cntnt'>
                                        <input type="text" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className='reg-body-cntnt'>
                                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className='reg-btn'>
                                        <button>Create Account</button>
                                    </div>
                                    <div className='reg-para'>
                                        <p className='end-para'>Already have an account? <Link to='/login' className='end-link'>Sign in Now</Link></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
