import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import React from "react";
import { setCreate } from "./redux/slices/counter";
import { setIsLogged } from "./redux/slices/counter";
import {useSelector,useDispatch} from 'react-redux'


export default function Signup(){
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    let dispatch=useDispatch()
    const submit=async()=>{        
        await createUserWithEmailAndPassword(auth,email,password)
        .then((useCredential)=>{
            const user =useCredential.user;
            console.log("useCredential",useCredential)
            localStorage.setItem("firebase_token",user.accessToken)
            dispatch(setIsLogged(true))
            dispatch(setCreate(user))
            console.log(user.accessToken)
            alert("success")
            navigate("/homepage")
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(errorCode,errorMessage)
        })
    }
    return(
        <>
            <h1>Signup page</h1>
            <div>
                <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="button" onClick={submit}>Submit</button>
            </div>

        </>
    )
}