import axios from "axios";
import { loginData } from "../Redux/userRedux";

export const SignUpDetails=async(data)=>{
    try {
        console.log("check",data);
        const res=await axios.post('http://localhost:7000/api/data/postmethod',data)
        console.log("check data",res);
    } catch (error) {
        console.log("error");
    }
}



export const LoginDetails=async(datas,dispatch)=>{
    console.log('datas data is',datas);
    try {
        const res=await axios.post('http://localhost:7000/api/data/login',datas);
        console.log("check login data",res.status);
        dispatch(loginData(res.data))
    } catch (error) {
        console.log(error);
    }
}