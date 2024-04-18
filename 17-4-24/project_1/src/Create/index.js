import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create(props){
const navigate = useNavigate();    
const[userData,setUserData]=useState({
    name:"",
    email:"",
    password:""
})
const setUserDetails=()=>{
       props.setUser([...props.user,userData]) 
       navigate("/list");  
}
return(
        <>
        <h1>You can create your details here!!</h1>        
        <input type="text" placeholder="Enter Your Name" onKeyUp={(e)=>setUserData({
            ...userData,
            name:e.target.value
        })}></input>
        <br/>
        <input type="email" placeholder="Enter Your Email" onKeyUp={(e)=>setUserData({
            ...userData,
            email:e.target.value
        })}></input>
        <br/>
        <input type="password" placeholder="Enter Your Password" onKeyUp={(e)=>setUserData({
            ...userData,
            password:e.target.value
        })}></input>
        <br/>
        <button onClick={()=>setUserDetails()}>Create</button>
        <h5>{JSON.stringify(props.user)}</h5>        
        </>




)
}