// import axios from 'axios'
// import { loginData } from '../../../Redux/userRedux';

// export const EcomSignUp=async(data)=>{
//     console.log("data",data);
//     try {
//         const res=await axios.post('http://localhost:7002/api/adminpost',data)
//         console.log(res);
//         return res.data
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const EcomLogin=async(data,dispatch)=>{
//     console.log('log data',data);
//     try {
//         const res=await axios.post('http://localhost:7002/api/ecomlogin',data)
//         console.log(res);
//         dispatch(loginData(res.data))
//     } catch (error) {
//         console.log(error);
//     }
// }