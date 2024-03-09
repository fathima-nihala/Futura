import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import { useForm } from 'react-hook-form';


const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        setLoading(true);

        try {
            await updateUserProfile({ name, photoURL });
            alert('Update successful');
        } catch (error) {
            console.error('Update failed', error);
            alert('Update failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='up-prof'>
            <div className='upprof-cntnr'>
                <div className='up-cntr-prof'>
                    <h3>Update your profile</h3>
                    <p>Name</p>
                    <input type="text" placeholder='Your name' {...register("name")} required />
                    <p>Upload photo</p>
                    <input type="text" placeholder='photo URL' {...register("photoURL")} required />
                </div>
                <button className='up-prof-btn' onClick={handleSubmit(onSubmit)}>Update</button>
            </div>
        </div>
    )
}

export default UpdateProfile