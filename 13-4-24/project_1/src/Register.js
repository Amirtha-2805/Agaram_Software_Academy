import { useState } from "react";

export default function Register(props){
   const[name,setName]=useState("")
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")   

   const Register_data=()=>{
        let User_data={
            name,
            email,
            password
        }
        props.setUserDetails([...props.userDetails,User_data])
        props.setStateLogged(true)
   }
    return(
        <>        
            {props.isLogged==false ? <h1>Register Page</h1>:null}
            <br/>            
            {props.isLogged==false ? <input type="text" placeholder="Enter your name" onKeyUp={(e)=>setName(e.target.value)}/>:null}        
            <br/>           
            {props.isLogged==false ? <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setEmail(e.target.value)}/>:null}            
            <br/>           
            {props.isLogged==false ? <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setPassword(e.target.value)}/>:null}        
            <br/>
            <br/>
            {props.isLogged==false ? <button onClick={()=>Register_data()}>Register</button>:null}
            {/* {props.isLogged==false ?<button onClick={()=>props.setStateLogged(true)}>LoginPage</button>:null} */}
            {props.isLogged==false ?<h5>{JSON.stringify(props.userDetails)}</h5>:null}
            
        </>       
        
    )
    





}