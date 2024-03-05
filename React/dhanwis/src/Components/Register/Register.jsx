import React, { useState } from 'react';
import './register.css';
import { RegData, regView } from '../Api/ApiCall';
import View from './View';
import { regDetails } from '../../Redux/Usereducer';
import { useDispatch } from 'react-redux';

export const Register = () => {
    const dispatch = useDispatch();

    const [passwordError, setPasswordError] = useState('');
    //for same pge routring
    const [activeNav, setActiveNav] = useState(0);
    const handleNavigationClick = (index) => {
        setActiveNav(index);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [userData, setUserData] = useState(null); // State variable to hold fetched user data

    const handleSubmit = () => {

        if (password !== confirmpassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        // Reset password error
        setPasswordError('');

        console.log({ name, email, phone, password, confirmpassword, gender });
        RegData({ name, email, phone, password, confirmpassword, gender });
        dispatch(regDetails({ name, email, phone, password, confirmpassword, gender }));
    }

    // const display = async () => {
    //     await regView({ name, email, phone, password, confirmpassword, gender });
    //     // console.log('ggggg', data);
    // }

    // const display = async () => {
    //     // Assuming you have the user ID stored in some variable like userId
    //     await regView(userId);
    // }


    const display = async () => {
        try {
            const userData = await regView(); // Fetch user data from backend
            setUserData(userData); // Update state with fetched user data
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    return (
        <div className='register'>
            <div className='reg-container'>
                <div>
                    <h2>Register</h2>
                    <div>
                        <div className='data'>
                            <label htmlFor="name" className='reg-label'>Name:</label>
                            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required className='reg-inp' />
                        </div>
                        <div className='data'>
                            <label htmlFor="email" className='reg-label'>Email:</label>
                            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required className='reg-inp' />
                        </div>
                        <div className='data'>
                            <label htmlFor="phone" className='reg-label'>Phone no:</label>
                            <input type="text" placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} required className='reg-inp' />
                        </div>
                        <div className='data1'>
                            <div>
                                <label htmlFor="gender" className='reg-label'>Gender:</label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} /> Other
                                </label>
                            </div>
                        </div>
                        <div className='data'>
                            <label htmlFor="password" className='reg-label'>Password:</label>
                            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required className='reg-inp' />
                        </div>
                        <div className='data'>
                            <label htmlFor="confirmpassword" className='reg-label'>Confirm Password:</label>
                            <input type="password" placeholder='Confirm your password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='reg-inp' />
                        </div>
                        {passwordError && <div className='error'>{passwordError}</div>}
                    </div>
                    <div className='button-data'>
                        <button type="submit" onClick={handleSubmit} className='reg-sbmt'>Submit</button>
                    </div>
                </div>
            </div>
            <button onClick={() => handleNavigationClick(1)} className='reg-btn'>View</button>

            <button className='reg-btn'>Edit</button>
            {activeNav === 1 && (
                <div>
                    <View userData={userData} />
                </div>
            )}
        </div>
    );
};
