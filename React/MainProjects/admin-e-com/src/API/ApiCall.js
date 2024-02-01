import axios from "axios";
import { loginData } from "../Redux/userRedux";
// import {userRequest} from


//to post/add admin-user details
export const SignupData = async (data) => {
//    const newType ={...data, type:'user'}
//     console.log('newtype',newType);
    try {
        const res = await axios.post('http://localhost:7002/api/adminpost' ,data)
        console.log('check admin data', res.status);
    } catch (error) {
        console.log(error);
    }
}



//to get admin-user login details
export const LoginDatass = async (data, dispatch) => {
    console.log('login data', data);
    try {
        const res = await axios.post('http://localhost:7002/api/adminlogin', data)
        console.log(res);
        dispatch(loginData(res.data))
    } catch (error) {
        console.log(error);
    }
}



//to add product
export const products = async (pro) => {
    console.log("dattttaaaa", pro);
    try {
        const productData = await axios.post("http://localhost:7002/api/addproduct", pro)
        console.log("**", productData);
    } catch (err) {
        console.log(err);
    }
}


//to view productdetails
export const productView = async (id) => {
    console.log("product-data",id);
    try {
        const res = await axios.get('http://localhost:7002/api/viewproduct',id)
        console.log('getproduct',res);
        return res
    } catch (error) {
        console.log(error);
    }
}


//to get ecom-users user-details
export const userss = async (id) => {
    console.log("data", id)
    try {
        const res = await axios.get(`http://localhost:7002/api/Ecomgetmethod`, id)
        console.log("yo ansr", res.data);
        return res
    } catch (error) {
        console.log(error);
    }
}


//to delete user 
export const DeleteUserIdData = async (id) => {
    console.log('user id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/Ecomdelete/${id}`)
        console.log('delete', res);
    } catch (error) {
        console.log(error);
    }
}

//to delete product
export const productDelete = async (id) =>{
    console.log('product id',id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/removeproduct/${id}`)
        console.log('delet product',res);
    } catch (err) {
        console.log(err);
    }
}

//to update product details
export const updateProduct = async(id,datas)=>{
    console.log('update id?',id);
    try {
        const res = await axios.put(`http://localhost:7002/api/updateproduct${id}`,datas)
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}
