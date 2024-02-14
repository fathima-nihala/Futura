import React from 'react'
import Modal from '../../../Components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { removaData } from '../../../Redux/userRedux';
import { useNavigate } from 'react-router-dom';
import './userprofile.css'

const UserProfile = (props) => {

    const itemuser = useSelector((state) => state.Login.LoginInfo[0]);
    console.log('item', itemuser);


    //for logout
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function Logout() {
        dispatch(removaData())
        alert('Logout Successfully');
        navigate(-1);
    }
    return (
        <div>
            <Modal hideHandler={props.ProforderHideHandler}>
                <div className='us-im'>
                    {itemuser ? (
                        <>
                            {itemuser.image && <img src={`./Profile/${itemuser.image}`} height={100} width={100} alt="Profileuser" className='Profileuser' />}
                            {itemuser.firstname && <h3 className='prouser-name'>{itemuser.firstname}</h3>}
                            {itemuser.email && <h5 className='prouser-mail'>{itemuser.email}</h5>}
                            <button className='profuser-btn'>Update</button>
                            <button onClick={Logout} className='profuser-outbtn'>Logout</button>
                        </>
                    ) : (
                        <p>Logout Successfull</p>
                    )}
                </div>
            </Modal>

        </div>
    )
}

export default UserProfile
