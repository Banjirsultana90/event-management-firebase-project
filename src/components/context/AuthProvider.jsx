import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
export const AuthContext=createContext(null)
const googleprovider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)



    const googlelogin=()=>{
        return signInWithPopup(auth,googleprovider)

    }
    const createuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 
    const signin=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            console.log('user in the auth state changed',currentuser);
            setuser(currentuser)
            setloading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const authinfo={
        user,
        loading,
        googlelogin,
        createuser,
        signin,
        logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;