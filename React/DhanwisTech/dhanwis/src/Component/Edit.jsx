import React, { useEffect, useState } from 'react'
import { regEdit, regView } from './Api';

const Edit = ({ id }) => {
    console.log('editiddddddd', id);
    const [userData, setUserData] = useState(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setgender] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await regView(id);
                console.log('edataaa', data);
                setUserData(data)
                setName(data.name)
                setEmail(data.email)
                setPhone(data.phone)
            } catch (error) {
                console.log('error fetching user data', error);
            }
        }
        fetchData()
    }, [id])

    const handleUpdateSubmit = async () => {
        const updateData = { name, email, phone, gender, id };
        const res = await regEdit(updateData);
        console.log('uuuuuuuuuuuu', res);
        console.log('uuiiiiiiddddd', id);
    }
    return (
        <div className='eedit'>
            {userData ? (
                <div className='edit'>
                    <h2>Update</h2>
                    <div className='reg-container'>
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
                        <div className='button-data'>
                            <button type='submit' onClick={handleUpdateSubmit} className='reg-sbmt'>Update</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}

export default Edit
