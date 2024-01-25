import axios from 'axios';

export const RegisterData = async (data) => {
  // Create a new object with additional type information
  const newData = { ...data, type: 'user' };
  try {
    const res = await axios.post('http://localhost:7005/data/scentifypost', newData);
    console.log('Response Status:', res.status);
  } catch (error) {
    console.error(error);
  }
};