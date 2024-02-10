import axios from 'axios'
import { loginData } from '../../../Redux/userRedux';

export const EcomSignUp = async (data) => {
    console.log("userdataa", data);
    try {
        const res = await axios.post('http://localhost:7002/api/ecompost', data)
        console.log(res);
        // return res.data
    } catch (error) {
        console.log(error);
    }
}

export const EcomLogin = async (data, dispatch) => {
    console.log('log data', data);
    try {
        const res = await axios.post('http://localhost:7002/api/ecomlogin', data)
        console.log(res);
        dispatch(loginData(res.data))
    } catch (error) {
        console.log(error);
    }
}

export const DeleteUserIdData = async (id) => {
    console.log('user id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/Ecomdelete/${id}`)
        console.log('delete', res);
    } catch (error) {
        console.log(error);
    }
}

