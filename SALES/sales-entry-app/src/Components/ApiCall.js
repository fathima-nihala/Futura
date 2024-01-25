import axios from "axios";
import { TotalAmount } from "../Redux/SalesRedux";

export const DataPost=async(data)=>{
    console.log('data',data);
    try {
        const res = await axios.post("http://localhost:7006/api/post",data)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const DataGet=async(dispatch,id)=>{
    console.log('id',id);
    try {
        const res=await axios.get(`http://localhost:7006/api/get${id}`)
        console.log('gettt',res.data);
        dispatch(TotalAmount(res.data))
    } catch (error) {
        console.log(error);
    }
}