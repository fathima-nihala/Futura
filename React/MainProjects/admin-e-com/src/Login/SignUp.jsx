import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignupData } from '../API/ApiCall';

const SignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setImage] = useState(null);

  const displayone = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);
    // formData.append('type','user')

    console.log('@@@-data', formData);
    await SignupData({...formData,type:'user'});
  };

  return (
    <div className='signup'>
      <h2>Please Sign In</h2>
      <form onSubmit={displayone} encType='multipart/form-data'>
        <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
        <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

        <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
        &nbsp;
        <button className='end' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;