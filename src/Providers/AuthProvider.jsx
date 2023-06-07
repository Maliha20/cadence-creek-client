import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
 }
 const profileUpdate =(name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,
        {
            displayName: name,
            photoURL: photo,
        })
  }

  const profileInfo =(email,photo,name) =>{
    setUser({...user, email: email,  displayName: name, photoURL: photo})
  }
 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
     })
      return ()=>{
         unsubscribe();
      }
  },[])

 const userSignIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
 }


 const GoogleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)

 }
 const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
 }



 const authInfo={
    user,
    loading,
    createUser,
    userSignIn,
    logOut,
    GoogleSignIn,
    profileUpdate,
    profileInfo
 }   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;