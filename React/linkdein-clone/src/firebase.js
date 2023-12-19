import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDnAYrzVbtY3TfQGYOVumnFDfhU_Ye3BdA",
    authDomain: "linkedin-clone-53b59.firebaseapp.com",
    projectId: "linkedin-clone-53b59",
    storageBucket: "linkedin-clone-53b59.appspot.com",
    messagingSenderId: "23992960183",
    appId: "1:23992960183:web:5ed7ec9588989c2e75b932"
  };

  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
 const auth=firebase.auth();

  export {db,auth};