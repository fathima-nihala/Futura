import axios from 'axios'

export const userSignup = async (data) => {
    console.log('signup-data', data);
    try {
        const res = await axios.post('http://localhost:9001/data/userpost', data)
        console.log('check user data', res.status);
    } catch (error) {
        console.log(error);
    }
}

export const userLogin = async (data, dispatch) => {
    console.log('login-data', data);
    try {
        const res = await axios.post('http://localhost:9001/data/userlogin', data)
        console.log('check login data', res);
        dispatch(userLogin(res.data))
    } catch (error) {
        console.log(error);
    }
}