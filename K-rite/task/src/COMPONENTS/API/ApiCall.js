import axios from "axios";

export const postUserDatas = async (data) => {
    console.log('data', data);
    try {
        const UserPost = await axios.post('http://localhost:7008/task/postdata', data)
        console.log(UserPost.status);
    } catch (error) {
        console.log(error);
    }
}