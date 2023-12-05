// import React, { useEffect, useState } from 'react'
// import './Update.css'
// import { useSelector } from 'react-redux';
// import { UpdateProf } from '../ApiCall';

// const Update = () => {
//     const [data, setData] = useState({});    //object aayitaann koduthadh.ennale e.vechit access  cheyyan pattu.

// const updateData=useSelector((state)=>state.Login.loginInfo)
// console.log(updateData,'&&&&');
// if (updateData) {
//     var Id=updateData[0]&&updateData[0]._id   
// }
// console.log("####",Id);

//     const [firstname, setfirstname] = useState('')
//     const [secondname, setsecondname] = useState('')
//     const [age, setage] = useState("");
//     const [email, setemail] = useState('')
//     const [address, setaddress] = useState("");

//     useEffect(() => {
//         setfirstname(data.firstname)
//         setsecondname(data.secondname)
//         setage(data.age)
//         setemail(data.email)
//         setaddress(data.address)
//     }, [data])

//     var print=async()=>{
//         var data=await UpdateProf(Id)
//         setData(data.data)
//         console.log("u idiot",data.data);
//     }
//   return (
//     <div>
//         <div className="update_display">
//                     <input type="text" placeholder={data.firstname} value={firstname} onChange={(e) => setfirstname(e.target.value)} /> <br />
//                     <input type="text" placeholder={data.secondname} value={secondname} onChange={(e) => setsecondname(e.target.value)} /><br />
//                     <input type="date" placeholder={data.age} value={age} onChange={(e) => setage(e.target.value)} /><br />
//                     <input type="mail" placeholder={data.email} value={email} onChange={(e) => setemail(e.target.value)} /><br />
//                     <input type="text" placeholder={data.address} value={address} onChange={(e) => setaddress(e.target.value)} /><br />
//                 </div>
//                 <button onClick={print}>Update</button>
//     </div>
//   )
// }

// export default Update