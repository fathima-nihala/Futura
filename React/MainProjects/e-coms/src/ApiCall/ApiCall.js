// import axios from 'axios'
// import { logingEcomData } from '../Redux/userredux'

// export const EcomSignUp=async(data)=>{
//     console.log("data",data);
//     try {
//         const res=await axios.post('http://localhost:7002/api/ecompost',data)
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
//         dispatch(logingEcomData(res.data))
//     } catch (error) {
//         console.log(error);
//     }
// }