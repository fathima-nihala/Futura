import axios from "axios";

export const postData = async (data) => {
    console.log('lll', data);
    try {
        const dbdata = await axios.post('http://localhost:7002/bt/post', data)
        console.log('jjj', dbdata.status);
        return dbdata
    } catch (error) {
        console.log('error');
    }
}

// export const Editdata = async (data) => {
//     console.log('dataaa', data);
//     try {

//     } catch (error) {

//     }
// }
