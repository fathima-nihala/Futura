import axios from "axios";
import { loginData } from "../../Redux/userRedux";
// import {userRequest} from

export const SignupData=async(data)=>{
    console.log('your data',data);
    try {
        const res=await axios.post('http://localhost:7002/api/adminpost',data)
        console.log('check data',res);
    } catch (error) {
        console.log(error);
    }
}

export const LoginData=async(data,dispatch)=>{
    console.log('login data',data);
    try {
        const res=await axios.post('http://localhost:7002/api/adminlogin',data)
        console.log(res);
        dispatch(loginData(res.data))
    } catch (error) {
        console.log(error);
    }
}

export const products =async (pro) => {
    console.log("dattttaaaa",pro);
    try{
        const productData= await axios.post("http://localhost:7002/api/addproduct",pro)
        console.log("**",productData);
    }catch(err){
        console.log(err);
    }
}

export const userss = async(id)=>{
    console.log("data",id)
    try {
        const res=await axios.get(`http://localhost:7002/api/getuser/${id}`)
        console.log("yo ansr",res);
        return res
    } catch (error) {
        console.log(error);
    }
}

// export const getProfile=async(id)=>{
//     console.log('dataa',id);
//     try {
//         const res1=await userRequest.get(`/getdataok/${id}`)
//         console.log("final answer",res1);
//     return res1   
//     } catch (error) {
//         console.log(error);
//     }
// }