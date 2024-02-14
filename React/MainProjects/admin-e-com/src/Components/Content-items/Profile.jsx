import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import './profile.css'
import { GetAdminData, UpdateAdminDatas } from '../../API/ApiCall';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const item = useSelector((state) => state.Login.LoginInfo[0]);
  console.log('item', item);

  // const handleUpdateAdmin = async (datas) => {
  //   console.log('upadmin',datas);
  //   UpdateAdminDatas(datas);
  // }

  //item.email || 'email'


  const [firstname, setfirstname] = useState(item.firstname || 'firstname');
  const [email, setemail] = useState(item.email || 'email');
  const [image, setImage] = useState({})


  // let formdata = new FormData();
  // formdata.append('firstname', firstname);
  // formdata.append('email', email);
  // formdata.append('image', image);

  // console.log('Updete-admin-formdata', formdata);

  if (item) {
    var updId = item && item._id
    console.log('iddD', updId);
  }

  useEffect(() => {
    async function AdminProfileDisplay() {
      if (item && item.firstname && item.email) {
        const dataGet = await GetAdminData(updId);
        if (dataGet && dataGet.firstname && dataGet.email) {
          setfirstname(dataGet.firstname);
          setemail(dataGet.email);
          setImage(dataGet.image || {});
        }
      }
    }
    AdminProfileDisplay();
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('image', image);
    if (item && item._id && item.firstname && item.email) {
      const updatooi = await UpdateAdminDatas(formData, item._id);
      console.log('updatooi', updatooi);
    }
  }

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    setIsEditing(true);
  };


  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        {/* <div className='ad-im'>
          {item && <img src={`./Profile/${item.image}`} height={100} width={100} alt="Profile" />}
          <h3 className='pro-name'>{item.firstname}</h3>
          <h5 className='pro-mail'>{item.email}</h5>
          <button className='prof-btn'><Link to='/adminupdate' className='upadmin-link'>update</Link></button>
        </div> */}

        <div>
          {isEditing ? (
            <div>
              <form encType='multipart/form-data' onSubmit={handleSubmit}>
                <div>
                  <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div>
                  <input type="email" value={email} placeholder='email' onChange={(e) => setemail(e.target.value)} />                </div>
                <div>
                  <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div>
                  <button className='prof-btn'>Update</button>
                </div>
              </form>
            </div>
          ) : (
            <div className='ad-im'>
              {item && <img src={`./Profile/${item.image}`} height={100} width={100} alt="Profile" />}
              {item && item.firstname && <h3 className='pro-name'>{item.firstname}</h3>}
              {item && item.email && <h5 className='pro-mail'>{item.email}</h5>}
              {/* {item.email && <h5 className='pro-mail'>{email}</h5>} */}
            </div>
          )}
          {!isEditing && (
            <button className='prof-btn' onClick={handleUpdate}>update</button>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Profile
