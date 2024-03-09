import React, { useState } from 'react'
import { postData } from './ApiCall'
import EditData from './EditData'

const AddData = () => {
    const [title, setTitle] = useState('')
    const [ingredients, setingredients] = useState('')
    const [preparationinstruction, setpreparationinstruction] = useState('')
    const [time, settime] = useState('')
    const [servings, setservings] = useState('')
    const [dietarylabels, setdietarylabels] = useState('')
    const [image, setimage] = useState({})

    const [id, setId] = useState('')

    const handleSubmit = async () => {
        const res = await postData({ title, ingredients },)
        console.log('gggg', res);
        console.log('iddddddddddd', res.data._id);
        setId(res.data._id)
    }

    const [activeNav, setActiveNav] = useState(0);
    const handleNavigationClick = (index) => {
        setActiveNav(index);
        setId(id); // Set the ID state
    };

    return (
        <div>
            <div className='register'>
                <div className='reg-container'>
                    <div>
                        <h2>Register</h2>
                        <div>
                            <div className='data'>
                                <label htmlFor="name" className='reg-label'>Title:</label>
                                <input type="text" placeholder='Enter your name' required className='reg-inp' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='data'>
                                <label htmlFor="email" className='reg-label'>ingredients:</label>
                                <input type="email" placeholder='Enter your email' required className='reg-inp' value={ingredients} onChange={(e) => setingredients(e.target.value)} />
                            </div>

                            {/* <div>
                                <input type="file" name='image' onChange={(e) => setimage(e.target.files[0])} />
                            </div> */}
                        </div>
                        <div className='button-data'>
                            <button type="submit" className='reg-sbmt' onClick={handleSubmit}>Post</button>
                        </div>
                    </div>
                </div>
                <button className='reg-btn' onClick={() => handleNavigationClick(1)}>Edit</button>

                {activeNav === 1 &&
                    <EditData />
                }

            </div>
        </div>
    )
}

export default AddData