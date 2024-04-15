import { useState } from "react";

export default function Register(){
   const[isLogged,setStateLogged]=useState(false)
   const[name,setName]=useState("")
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")   
   const[userDetails,setUserDetails]=useState([]) 
   const[checkEmail,setCheckEmail]=useState("")
   const[checkPassword,setCheckPassword]=useState("")
   const[setEmailPwd,setStateEmailpwd]=useState("")


   const Register_data=()=>{
        let User_data={
            name,
            email,
            password
        }
        setUserDetails([...userDetails,User_data])
   }

   const LoginValidation=()=>{
    for(let each of userDetails){
        if((each.email==checkEmail)&&(each.password==checkPassword)){
            setStateEmailpwd(each.email)
            setStateLogged("true")
        }
    }
   }
    return(
        <>
            {isLogged==false ? <h1>Register Page</h1>:null}
            <br/>
            {isLogged==false ? <input type="text" placeholder="Enter your name" onKeyUp={(e)=>setName(e.target.value)}/>:null}
            <br/>
            {isLogged==false ? <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setEmail(e.target.value)}/>:null}
            <br/>
            {isLogged==false ? <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setPassword(e.target.value)}/>:null}
            <br/>
            {isLogged==false ? <button onClick={()=>Register_data()}>Register</button>:null}
            {isLogged==false ?<button onClick={()=>setStateLogged(true)}>LoginPage</button>:null}
            {isLogged==false ?<h5>{JSON.stringify(userDetails)}</h5>:null}
            {isLogged==true ? <h1>LoginPage</h1>:null}
            {isLogged==true ? <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setCheckEmail(e.target.value)}/>:null}
            <br/>
            {isLogged==true ? <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setCheckPassword(e.target.value)}/>:null}
            <br/>
            {isLogged==true? <button onClick={()=>LoginValidation()}>Login</button>:null}
            {isLogged==true? <button onClick={()=>setStateLogged(false)}>Register Page</button>:null}
            {isLogged==true?<h5>{JSON.stringify(userDetails)}</h5>:null}
            {isLogged=="true" ?<h1>Welcome!...{setEmailPwd}</h1>:null}





        </>       
        
    )
    





}