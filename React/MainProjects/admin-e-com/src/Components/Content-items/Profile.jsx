import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import './profile.css'

const Profile = (props) => {
    const item = useSelector((state) => state.Login.LoginInfo[0]);
    console.log('item', item);
  return (
    <div>
        <Modal  hideHandler={props.orderHideHandler}>
      <div  className='ad-im'>
                  {item && <img src={`./Profile/${item.image}`} height={100} width={100} alt="Profile" />}
                  <h3 className='pro-name'>{item.firstname}</h3>
                  <h5 className='pro-mail'>{item.email}</h5>
                  <button className='prof-btn'>update</button>
                  </div>
                  </Modal>
    </div>
  )
}

export default Profile
