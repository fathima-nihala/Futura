// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4s6J16dCD7FITRpJcq5SJWnxXxED6Qe0",
    authDomain: "spiceyeats-2874a.firebaseapp.com",
    projectId: "spiceyeats-2874a",
    storageBucket: "spiceyeats-2874a.appspot.com",
    messagingSenderId: "235261187011",
    appId: "1:235261187011:web:b1ab797ddd141efe29e376",
    measurementId: "G-FBFPBKD3DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getAuth(app);
export default app;
