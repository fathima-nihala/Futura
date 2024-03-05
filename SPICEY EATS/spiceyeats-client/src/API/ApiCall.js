import axios from 'axios'
import { loginData } from '../Redux/useRedux';

//*****************************************USER******************* */

//client signUp
export const userSignup = async (data) => {
    console.log('signup-data', data);
    try {
        const res = await axios.post('http://localhost:9001/data/userpost', data)
        console.log('check user data', res.status);
    } catch (error) {
        console.log(error);
    }
}


export const UserLoginData = async(data, dispatch) => {
    console.log('login-data', data);

    try {
        const response = await axios.post('http://localhost:9001/data/userlogin', data);
        console.log('check check', response.data);
        dispatch(loginData(response.data));
    } catch (error) {
        console.error('Axios error:', error);
        // Handle error or dispatch an action to update the Redux state with the error
    }
};


//***************************PRODUCTS************************** */
export const products = async (pro) => {
    console.log("dattttaaaa", pro);
    try {
        const productData = await axios.post("http://localhost:9001/data/postprod", pro)
        console.log("**", productData);
    } catch (err) {
        console.log(err);
    }
}


