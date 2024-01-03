import axios from "axios";

export const FbSignUpData=async(datas)=>{
    try{
        console.log(' fb first check',datas);
        const res=await axios.post(`http://localhost:7001/api/fbpost`,datas)
        console.log('fb final data',res);
        // return res.data
    }catch(err){
        console.log("err");
    }
}