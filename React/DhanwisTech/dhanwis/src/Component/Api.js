import axios from "axios";

export const RegData = async (data) => {
    console.log('data', data);
    try {
        const res = await axios.post('http://localhost:7002/reg/dhanwispost', data)
        console.log('check admin data', res.status);
        return res
    } catch (error) {
        console.log(error);
    }
}

export const regView = async (id) => {
    console.log('apiIddddd', id);
    try {
        const response = await axios.get(`http://localhost:7002/reg/dhanwisget/${id}`);
        console.log('yuyuyu', response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const regEdit = async (data) => {
    const { name, email, phone, gender, id } = data;
    console.log('upidddddddd', id);
    const updateData = { name, email, phone, gender };
    try {
        const dbdata = await axios.put(`http://localhost:7002/reg/dhanwisedit/${id}`,updateData)
        console.log('dbdataaaaa',dbdata.data);
        return dbdata.data
    } catch (error) {
        console.log(error);
    }
}