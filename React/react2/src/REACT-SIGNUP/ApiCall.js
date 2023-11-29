import axios from "axios"
import { loginDetails } from "../Redux/persistconf";
import { publicRequest } from "./RequestMethod";


export const SignUpData=async(datas)=>{
    try{
        console.log('first check',datas);
        const res=await publicRequest.post('/postmethod',datas)
        console.log('final data',res);
    }catch(err){
        console.log("err");
    }
}

export const GetIdData=async(id)=>{
    console.log('id?',id);
    try{
        const res=await axios.get(`http://localhost:7000/api/data/getidmethod/${id}`)
        console.log('8888888',res);
        return res.data
    }catch(err){
        console.log(err);
    }
}

export const DeleteIdData=async(id)=>{
    console.log('id ?',id);
    try{
        const res=await axios.delete(`http://localhost:7000/api/data/delete/${id}`)
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

export const UpdateIdData=async(id,datas)=>{
    console.log('id?',id);
    try{
        const res=await axios.put(`http://localhost:7000/api/data/updatedata/${id}`,datas)
        console.log(res.data);
        return res.data
    }catch(err){
        console.log(err);
    }
}

export const loginData=async(logindata,dispatch)=>{
    console.log('login data is',logindata);
    try{
        const res=await axios.post('http://localhost:7000/api/data/login',logindata);
        console.log('response',res.data);
        dispatch(loginDetails(res.data))
    }catch(err){
        console.log(err);
    }
}