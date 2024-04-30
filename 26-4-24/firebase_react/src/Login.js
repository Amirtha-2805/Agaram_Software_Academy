import React, { useState } from "react"
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { setCreate } from "./redux/slices/counter";
import { setIsLogged } from "./redux/slices/counter";
import {useSelector,useDispatch} from 'react-redux'


export default function Login(){
    const[checkEmail,setChekEmail]=useState("")
    const[checkPassword,setChekPassword]=useState("")
    const navigate=useNavigate()
    let dispatch=useDispatch()

    const login_data=async (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,checkEmail,checkPassword) 
        .then((useCredential)=>{
            const user=useCredential.user
            localStorage.setItem("firebase_token",user.accessToken)
            dispatch(setIsLogged(true))
            dispatch(setCreate(user))
            console.log(1,user)
            navigate("/homepage")
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