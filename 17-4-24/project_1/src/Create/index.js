import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create(props){
    const navigate = useNavigate();    
    const[userData,setUserData]=useState({
        name:"",
        email:"",
        password:""
    })

    const loginUser=()=>{
        navigate("/login")
    }              
        localStorage.setItem("user_details",JSON.stringify([...props.user,userData]))
        let local_details=localStorage.getItem("user_details")
        let parsed_data=JSON.parse(local_details)
        let existing_email="";
        const setUserDetails=()=>{
            if(userData.name==""||userData.email==""||userData.password==""){
                alert("please fill requirred details")
                navigate("/create")
            }
            props.user.forEach((existing_data)=>{
                if(existing_data.email==userData.email){
                    existing_email=userData.email    
                }    
           })
                if(existing_email==userData.email){
                    alert("Data already exists")                
                }    
                else{            
                    props.setUser(parsed_data) 
                        navigate("/login")
                }    
                console.log("parsed",props.user);  
                console.log("name",userData)
     }         
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
        <button onClick={()=>setUserDetails()}>Create</button>
        <button onClick={()=>loginUser()}>Login</button>       
        <h5>{JSON.stringify(parsed_data)}</h5>        
        </>
)
}