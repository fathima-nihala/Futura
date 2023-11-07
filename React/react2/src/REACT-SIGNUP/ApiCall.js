import axios from "axios"

export const SignUpData=async(datas)=>{
    try{
        console.log('first check',datas);
        const res=await axios.post('http://localhost:3000/api/data/postmethod',datas)
        console.log('final data',res);
    }catch(err){
        console.log("err");
    }
}