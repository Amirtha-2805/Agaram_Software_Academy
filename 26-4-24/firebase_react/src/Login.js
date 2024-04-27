import React, { useState } from "react"
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    const[checkEmail,setChekEmail]=useState("")
    const[checkPassword,setChekPassword]=useState("")
    const login_data=async (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,checkEmail,checkPassword) 
        .then((useCredential)=>{
            const user=useCredential.user
            console.log(1,user)
        }) 
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(2,errorCode.errorMessage)
        })     
    }
    return(
        <>
            <h1>Login page</h1>
            <div>
                <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setChekEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setChekPassword(e.target.value)} />
            </div>
            <div>
                <button type="button" onClick={login_data}>Login</button>
            </div>
        </>
    )
}