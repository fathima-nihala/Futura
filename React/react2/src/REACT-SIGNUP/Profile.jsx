import React, { useEffect, useState } from 'react'
import { DeleteIdData, GetIdData, UpdateIdData } from './ApiCall';
import './Profile.css'

const Profile = () => {
    const [profileId, setProfileId] = useState('');
    const [data, setData] = useState({});    //object aayitaann koduthadh.ennale e.vechit access  cheyyan pattu.

    //to update
    const [firstname, setfirstname] = useState('')
    const [secondname, setsecondname] = useState('')
    const [age, setage] = useState("");
    const [email, setemail] = useState('')
    const [address, setaddress] = useState("");




    const handleInputChange = (event) => {
        setProfileId(event.target.value);
    }


    console.log('data ?', data);

    //id vech data get cheyyan
    const handleSubmit = async () => {
        try {
            console.log('profileid submitted', profileId);
            const a = await GetIdData(profileId)
            console.log('Result:', a);
            setData(a);
        } catch (err) {
            console.log('Error fetchin data', err);
        }
    }
    console.log('ser dataaaaaaaaaaaaaaaaa', data);


    useEffect(() => {
        setfirstname(data.firstname)
        setsecondname(data.secondname)
        setage(data.age)
        setemail(data.email)
        setaddress(data.address)
    }, [data])

    //to delete data
    const deleteSubmit = async () => {
        try {
            console.log('profile id deleted', profileId);
            DeleteIdData(profileId)

        } catch (err) {
            console.log("Error fetching", err);
        }
    }

    //to update data
    const updateSubmit = async () => {
        try {
            console.log('profile id updated', profileId);
            UpdateIdData(profileId, { firstname, secondname, age, email, address })

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='profile-wraper'>
            <div className="profile-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='prof'>
                <div className='profile-id-form'>
                    <span className='sp-one'>
                        <input type="text" placeholder='enter the id' value={profileId} onChange={handleInputChange} required />
                    </span>
                    <span className='sp-two'>
                        <button onClick={handleSubmit}>Submit</button>
                    </span>
                    <span className='sp-two'>
                        <button onClick={deleteSubmit}>Delete</button> 
                    </span>
                    <span className='sp-two'>
                        <button onClick={updateSubmit}>Update</button>
                    </span>
                </div>
                <br />
                <div className="profile-display">
                    {/* <div className='profile-display-body'> */}
                    <input type="text" placeholder={data.firstname} value={firstname} onChange={(e) => setfirstname(e.target.value)} /> <br />
                    <input type="text" placeholder={data.secondname} value={secondname} onChange={(e) => setsecondname(e.target.value)} /><br />
                    <input type="date" placeholder={data.age} value={age} onChange={(e) => setage(e.target.value)} /><br />
                    <input type="mail" placeholder={data.email} value={email} onChange={(e) => setemail(e.target.value)} /><br />
                    <input type="text" placeholder={data.address} value={address} onChange={(e) => setaddress(e.target.value)} /><br />
                </div>
            </div>
        </div>
    )
}

export default Profile