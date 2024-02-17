import axios from "axios";
import { loginData } from "../Redux/UseRedux";

export const testSignupData = async (data) => {
    console.log('##', data);
    try {
        const res = await axios.post('http://localhost:7002/test/testpost', data)
        console.log('chekkk', res);
        // return res.status
    } catch (error) {
        console.log(error);
    }
}

export const testLoginData = async (data, dispatch) => {
    console.log('ghghgh', data);
    try {
        const res = await axios.post('http://localhost:7002/test/testlogin', data)
        console.log(res);
        dispatch(loginData(res.data))
        console.log('4444', loginData);
    } catch (error) {
        console.log(error);
    }
}