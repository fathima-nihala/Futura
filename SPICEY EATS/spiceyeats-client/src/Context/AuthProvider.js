import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../FIREBASE/firebase.config';

export const AuthContext=createContext();
const auth = getAuth(app);
const googleprovider  = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

//create an account
const createUser = async (email, password) => {
  try {
      await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Optionally, rethrow the error to handle it in the calling code
  }
}

//signup with gmail
const signUpWithGmail=()=>{
  return signInWithPopup(auth,googleprovider)
}

//login using email & pass
const login=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

//logout
const logout=()=>{
  signOut(auth)
}

//update
const updateUserProfile=({name,photoURL})=>{
  return updateProfile(auth.currentUser,{
    displayName:name,photoURL:photoURL
  })
}

//check signed-in user
useEffect(()=>{
  const checkUser = onAuthStateChanged(auth,(currentuser)=>{
    if (currentuser) {
      setUser(currentuser)
      setLoading(false)
    } else {
      //user signed out
    }
    return()=>{
      return checkUser
    }
  })
})

const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logout,
        updateUserProfile,
        loading
    }
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider