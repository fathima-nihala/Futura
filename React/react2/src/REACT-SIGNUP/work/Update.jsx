import React, { useEffect, useState } from 'react'
import './Update.css'
import { useSelector } from 'react-redux';
import { UpdateProf,} from '../ApiCall';

const Update = () => {
    // const [data, setData] = useState({});    //object aayitaann koduthadh.ennale e.vechit access  cheyyan pattu.
    const [profile,setProfile]=useState('');

const value=useSelector((state)=>state.Login.loginInfo[0])
console.log('454545',value);

if (value) {
    var Id=value&&value._id   
}
console.log("####",Id);


const [firstname, setfirstname] = useState('');
const [secondname, setsecondname] = useState('');
const [age, setage] = useState("");
const [email, setemail] = useState('');
const [address, setaddress] = useState("");
const [password,setpassword]=useState("")
//     console.log('data ?', data);


    // const handleInputChange = (event) => {
    //     setProfile(event.target.value);
    // }
    //id vech data get cheyyan
    // const handleSubmit = async () => {
    //     try {
    //         console.log('profile submitted', profile);
    //         const a = await getProfile(profile)
    //         console.log('Result:', a);
    //         setData(a);
    //     } catch (err) {
    //         console.log('Error fetching data', err);
    //     }
    // }
    // console.log('ser dataaaaaaaaaaaaaaaaa', data);


    useEffect(()=>{
        setfirstname(value.firstname || '');
          setsecondname(value.secondname || '');
          setemail(value.email)
          setage(value.age || '')
          setaddress(value.address)
          setpassword(value.password)
        },[value])

    
    

    const update = async () => {
        try {
            console.log('profile id updated', profile);
            UpdateProf( { _id:Id,firstname, secondname, age, email, address })

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='profile'>                        
            <div className='prof'>
                            <div className="profile-display-inp">
                            <input type="text" placeholder='firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)} className='dis-one'/>
                            <input type="text" placeholder='SecondName' value={secondname} onChange={(e)=>setsecondname(e.target.value)} className='dis-one'/>         
                            <br />
                            <input type="text" placeholder='dob' value={age} onChange={(e)=>setage(e.target.value)} className='dis-one'/> 
                            <input type="mail" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} className='dis-one' />
                            <br />
                            <input type="text" placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)} className='dis-one'/> 
                            <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} className='dis-one'/> 
                            <br />
                            <button onClick={update} className='dis-two'>Update</button> 
                </div>
    </div>
    </div>
  )
}




export default Update




//     const [firstname, setfirstname] = useState('');
//     const [secondname, setsecondname] = useState('');
//     const [dob, setdob] = useState("");
//     const [email, setemail] = useState('');
//     const [address, setaddress] = useState("");
//     const [password,setpassword]=useState("")

 
// const value=useSelector((state)=>state.Login.loginInfo[0])
// console.log('454545',value);

// useEffect(()=>{
// setfirstname(value.firstname || '');
//   setsecondname(value.secondname || '');
//   setemail(value.email)
//   setdob(value.dob || '')
//   setaddress(value.address)
//   setpassword(value.password)
// },[value])
   
// return (
//   <div>
//       <div className='profile'>
//       <div className='prof'>
//       <input type="text" placeholder='' value={firstname} onChange={(e)=>setfirstname(e.target.value)} className='.inp1' /> <br />
//       <input type="text" placeholder='SecondName' value={secondname} onChange={(e)=>setsecondname(e.target.value)} className='inp2'/> <br />
//       <input type="date" placeholder='dob' value={dob} onChange={(e)=>setdob(e.target.value)} className='inp3' />
//       <input type="text" placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)} className='inp4'/> <br/>
//       <input type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} className='inp5'/>
//      <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />  <br />
//       <button className='U-btn'> Update</button>

//                   {/* <input type="text" placeholder='Enter your  password' className='inp5'/> */}

                  
// </div>

//               </div>
//           </div>

// )
// }