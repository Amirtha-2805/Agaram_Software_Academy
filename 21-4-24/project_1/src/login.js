import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props){
    const navigate = useNavigate();   
//   const[isLogged,setIsLogged]=useState(false)

    const[loginState,setStateLogin]=useState({
        email:"",
        password:""
    })
    // useEffect(()=>{
    //     setIsLogged(loginState)
    //     if(isLogged==true ){
    //         navigate("/list")
    //     }
    //     else{
    //         navigate("/login")
    //     }
    // },[])
    const checkLogin=()=>{
        axios({
            method:"POST",
            url:"https://agaram.academy/api/action.php",
            Data:{
                request:"candidate_login",
                email:loginState.email,
                password:loginState.password
            }
        }).then((response)=>{
            console.log(response)
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
                        
                        <button type="button" onClick={()=>checkLogin()} >Login</button>
                    </div>            
                <h5>{JSON.stringify(loginState)}</h5>
                </>
            )
        }