import axios from "axios";

export const SignUpDetails=async(data)=>{
    try {
        console.log("check",data);
        const res=await axios.post('http://localhost:7000/api/data/postmethod',data)
        console.log("check data",res);
    } catch (error) {
        console.log("error");
    }
}