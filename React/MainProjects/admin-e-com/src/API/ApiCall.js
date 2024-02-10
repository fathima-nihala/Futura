import axios from "axios";
import { loginData } from "../Redux/userRedux";
import { userRequest } from "../Components/RequestMethod";
// import {userRequest} from


//to post/add admin-user details
export const SignupData = async (data) => {
    //    const newType ={...data, type:'user'}
    //     console.log('newtype',newType);
    console.log('data',data);
    try {
        const res = await axios.post('http://localhost:7002/api/adminpost', data)
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



//***to add product
export const products = async (pro) => {
    console.log("dattttaaaa", pro);
    try {
        const productData = await axios.post("http://localhost:7002/api/addproduct", pro)
        console.log("**", productData);
    } catch (err) {
        console.log(err);
    }
}


//****to view productdetails
export const productView = async (id) => {
    console.log("product-data", id);
    try {
        const res = await axios.get('http://localhost:7002/api/viewproduct', id)
        console.log('getproduct', res);
        return res
    } catch (error) {
        console.log(error);
    }
}

// export const productViewTwo = async(id)=>{
//     console.log("product-data-two",id);
//     try {
//         const res = await axios.get(`http://localhost:7002/api/viewproduct${id}`,id)
//         console.log('getproduct',res);
//         return res
//     } catch (error) {
//         console.log(error);
//     }
// }

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

//****to delete product
export const productDelete = async (id) => {
    console.log('product id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/removeproduct/${id}`)
        console.log('delet product', res);
    } catch (err) {
        console.log(err);
    }
}

//****to update product details
export const updateProduct = async (updateval) => {
    console.log('update id?', updateval);
    console.log(updateval);
    try {
        const res = await axios.put(`http://localhost:7002/api/updateproduct/${updateval.id}`, {
            category: updateval.category,
            title: updateval.title,
            item: updateval.item,
            stock: updateval.stock,
            description: updateval.description,
            mrp: updateval.mrp,
            price: updateval.price,
            image: updateval.image,
        })
        console.log('upp', res.data);
        return res.data
    } catch (error) {
        console.log('oooo', error);
    }
}

// export const updateProduct = async (updateval) => {
//     console.log('update id?', updateval);
//     // console.log('update');
//     try {
//         const res = await axios.put(`http://localhost:7002/api/viewproductTwo/${updateval._id}`,{

//         });
//         console.log('Update response:', res.data);
//         return res.data;
//     } catch (error) {
//         console.error('Error updating product:', error);
//         throw error;
//     }
// };

//*** to view product by id
export const fetchProductById = async (id) => {
    console.log('fetchhhh', id);
    try {
        const response = await axios.get(`http://localhost:7002/api/viewproductTwo/${id} `);
        console.log('Fetch product response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

//view-page
export const viewDetails=async(id)=>{
    console.log('idddd00000',id);
    try {
        const ress=await axios.get(`http://localhost:7002/api/geItemss/${id}`);
        console.log('detailsss', ress.data);
        return ress;


    } catch (err) {
        console.log(err);
    }
};


// export const viewItemDetailsaa  = async