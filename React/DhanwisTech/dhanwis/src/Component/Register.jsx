import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RegData } from './Api';
import { regDetails } from '../Redux/Usereducer';
import './register.css'
import View from './View';
import Edit from './Edit';

export const Register = () => {

    const dispatch = useDispatch();

    //for same page route
    const [activeNav, setActiveNav] = useState(0);
    const handleNavigationClick = (index) => {
        setActiveNav(index);
        // setId(id); // Set the ID state
    };

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [gender, setgender] = useState('')
    const [id, setId] = useState('')

    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async () => {
        if (password !== confirmpassword) {
            setPasswordError('password do not match');
            return;
        }
        //reset password
        setPasswordError('');

        try {
            console.log('submitting form datas', { name, email, phone, password, confirmpassword, gender });

            const res = await RegData({ name, email, phone, password, confirmpassword, gender });
            console.log('resssss', res);
            console.log('idddddddddddd', res.data._id);
            setId(res.data._id)
            console.log('Form data submitted successfully');
            dispatch(regDetails({ name, email, phone, password, confirmpassword, gender }))
        } catch (error) {
            console.log('error submiting form data', error);
        }
    }

    return (
        <div className='register'>
            <div className='reg-container'>
                <div>
                    <h2>Register</h2>
                    <div className='data'>
                        <label htmlFor="name" className='reg-label'>Name:</label>
                        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='data'>
                        <label htmlFor="email" className='reg-label'>Email:</label>
                        <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='data'>
                        <label htmlFor="phone" className='reg-label'>phone:</label>
                        <input type="text" placeholder='Enter Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='data'>
                        <div>
                            <label htmlFor="gender" className='reg-label'>Gender</label>
                        </div>
                        <div className='datas-data'>
                            <input type="radio" name='gender' value='male' onChange={(e) => setgender(e.target.value)} />
                            <label> Male</label>
                            <input type="radio" name='gender' value='female' onChange={(e) => setgender(e.target.value)} />
                            <label>Female</label>
                            <input type="radio" name='gender' value='other' onChange={(e) => setgender(e.target.value)} />
                            <label>Others</label>
                        </div>
                    </div>
                    <div className='data'>
                        <label htmlFor="phone" className='reg-label'>Password:</label>
                        <input type="text" placeholder='Enter Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='data'>
                        <label htmlFor="phone" className='reg-label'>Confirmpassword:</label>
                        <input type="text" placeholder='Confirm Your password' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    </div>
                    {passwordError && <div className='error'>{passwordError}</div>}
                </div>
                <div className='button-data'>
                    <button type='submit' onClick={handleSubmit} className='reg-sbmt'>Submit</button>
                </div>

            </div>
            <button className='reg-btn' onClick={() => handleNavigationClick(1)}>View</button>
            <button className='reg-btn' onClick={() => handleNavigationClick(2)}>Edit</button>
            {activeNav === 1 &&
                <View id={id} />
            }
            {activeNav === 2 &&
                <Edit id={id} />
            }
        </div>
    )
}
