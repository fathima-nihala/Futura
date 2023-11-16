import axios from "axios"

export const SignUpData=async(datas)=>{
    try{
        console.log('first check',datas);
        const res=await axios.post('http://localhost:7000/api/data/postmethod',datas)
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