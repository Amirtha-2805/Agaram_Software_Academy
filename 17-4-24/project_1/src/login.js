import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props){
    const navigate = useNavigate();    
    const[loginState,setStateLogin]=useState({
        email:"",
        password:""
    })
    const createPage=()=>{
        navigate("/create")
    }
    const checkLogin=()=>{
        
       props.parsed_data.forEach((login_details)=>{
            if(login_details.email==loginState.email &&login_details.password==loginState.password){
                navigate("/list") 
                
            }
           
            
       })
    }
    return(

        <>
            <h1>Login page</h1>
            <div>
                <input type="email" placeholder="Enter your email" onKeyUp={(e)=> setStateLogin({
                    ...loginState,
                    email:e.target.value
                })}/>
            </div>
            <div>
                <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setStateLogin({
                    ...loginState,
                    password:e.target.value
                })}/>
            </div>
            <div>
                <button type="button" onClick={()=>createPage()}>Create page</button>
                <button type="button" onClick={()=>checkLogin()}>Login</button>
            </div>
            
          <h5>  {JSON.stringify(loginState)}</h5>

        </>
    )
}