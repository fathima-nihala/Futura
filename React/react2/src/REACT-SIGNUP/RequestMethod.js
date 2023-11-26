import axios from "axios";
const BASE_URL="http://localhost:7000/api/data/";

export const publicRequest=axios.create({  //.create =to access directly get ,post etc..
    baseURL:BASE_URL,
})