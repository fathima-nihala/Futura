const express = require('express')
const app = express()  //used to define routes and configure the server.
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

mongoose.connect(process.env.project_key).then(() => {
    console.log('database is conneted');
}).catch((err) => {
    console.log(err.message);
})

const UseRo = require('./Router/UseRouter')

app.use(express.json())
app.use('/reg', UseRo)

app.listen(7002, () => {
    console.log('server is connected');
})






// import React, { useState } from 'react';

// function GenderSelection() {
//     const [gender, setGender] = useState('homme'); // Default to 'homme'

//     const handleGenderChange = (event) => {
//         setGender(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Selected gender:", gender);
//         // You can perform further actions here, like sending the selected gender to the server
//     };

//     return (
//         <div>
//             <h2>Select Gender</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <input type="radio" name="gender" value="homme" checked={gender === 'homme'} onChange={handleGenderChange} /> Homme
//                 </label>
//                 <label>
//                     <input type="radio" name="gender" value="femme" checked={gender === 'femme'} onChange={handleGenderChange} /> Femme
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default GenderSelection;





// import React, { useState } from 'react';

// function UserRegistration() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         password: '',
//         confirmPassword: '',
//         gender: 'Men'
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can perform validation here before sending data to the backend
//         console.log('Form data:', formData);
//         // Send data to backend
//         fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Registration successful:', data);
//             // Handle successful registration (e.g., show a success message, redirect the user, etc.)
//         })
//         .catch(error => {
//             console.error('Error registering user:', error);
//             // Handle registration error (e.g., show an error message to the user)
//         });
//     };

//     return (
//         <div>
//             <h2>User Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

//                 <label>Phone:</label>
//                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /><br />

//                 <label>Password:</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />

//                 <label>Confirm Password:</label>
//                 <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /><br />

//                 <label>Gender:</label>
//                 <select name="gender" value={formData.gender} onChange={handleChange} required>
//                     <option value="Men">Men</option>
//                     <option value="Female">Female</option>
//                     <option value="other">Other</option>
//                 </select><br />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default UserRegistration;
