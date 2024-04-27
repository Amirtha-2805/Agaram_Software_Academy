import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect} from "react"

export default function Create(props){
    const navigate = useNavigate();    
    const[userData,setUserData]=useState({
        title:"",
        body:"",
        userId:""
    })

    const loginUser=()=>{
        navigate("/login")
    }  
    
    const create=async ()=>{
        const postData=await axios.post("https://jsonplaceholder.typicode.com/posts",userData)
        // console.log("post",postData)

    }    
    useEffect(()=>{
        create()       
    },[])          
   
 return(
        <>
        <h1>You can create your details here!!</h1> 
                      
        <input type="text" placeholder="Enter Your Name" onKeyUp={(e)=>setUserData
        ({
            ...userData,
            name:e.target.value
        })}/>
        <br/>
        <input type="email" placeholder="Enter Your Email" onKeyUp={(e)=>setUserData({
            ...userData,
            email:e.target.value
        })}/>
        <br/>
        <input type="password" placeholder="Enter Your Password" onKeyUp={(e)=>setUserData({
            ...userData,
            password:e.target.value
        })}/>
        <br/>
        {/* <button onClick={()=>setUserDetails()}>Create</button> */}
        <button onClick={()=>loginUser()}>Login</button>       
        {/* <h5>{JSON.stringify(parsed_data)}</h5>         */}
       

        </>
)
}