import axios from "axios";
const BASE_URL="http://localhost:7000/api/data/";


var Token=JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).Login).loginInfo[0]&&  //local-storage nn value edkaan "&&  mudhalulla code to handle error"
JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).Login).loginInfo[0].accessToken

console.log("finally Token",Token);

export const publicRequest=axios.create({  //.create =to access directly get ,post ,put etc..
    baseURL:BASE_URL,
})

export const userRequest=axios.create({ 
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`}
})