import axios from "axios";
import { regDetails } from "../../Redux/Usereducer";
// import { regDetails } from "../../Redux/Usereducer";


export const RegData = async (data) => {
    console.log('data', data);
    try {
        const res = await axios.post('http://localhost:7002/reg/dhanwispost', data)
        console.log('check admin data', res.status);
        // dispatch(regDetails(res.data))
    } catch (error) {
        console.log(error);
    }
}

// export const regView = async (data, dispatch) => {
//     console.log('login data', data);
//     try {
//         const res = await axios.post('http://localhost:7002/reg/dhanwisget', data)
//         console.log(res);
//         dispatch(regDetails(res.data))
//         console.log("*************",regDetails);
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const regView = async (id) => {
//     console.log('prof idddd', id);
//     try {
//         const res = await axios.get(`http://localhost:7002/reg/dhanwisget/${id}`);
//         console.log('dataa getuser', res.data);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

export const regView = async (id) => {
    console.log('login data', id);
    try {
        const res = await axios.get(`http://localhost:7002/reg/dhanwisget/${id}`)
        console.log(res);
        // dispatch(RegData(res.data))
    } catch (error) {
        console.log(error);
    }
}