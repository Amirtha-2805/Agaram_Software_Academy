import { useState } from "react";
import Register_again from "./Login";

export default function Register(){
  // let email_id={}
        const[name,setName]=useState("")
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[user,setUsers]=useState([])
        const[isLogged,setStateLogged]=useState(false)        
        const[checkEmail,setCheckEmail]=useState("")
        const[checkPassword,setCheckPassword]=useState("")
        const[details,setDetails]=useState("")

    const Reg_details=()=>{
        const regUsers={
            name,
            email,
            password
        }
        setUsers([...user,regUsers])
    }
    let loginValidation=()=>{
        for(let each of user){
         if((each.email==checkEmail)&&(each.password==checkPassword)){
           setDetails(each.email)
            setStateLogged("true")            
         }
        }
        console.log(details)        
    }

    return(
        <>         
        <div>
            {isLogged==true ?<h1>Login page</h1>:null}            
            <br/>
            {isLogged==false?<h2>Register Page</h2>:null}
            {isLogged==false? <input type="text" placeholder="Enter your name" onKeyUp={(e)=>setName(e.target.value)}/>:null}
            <br/>
            {isLogged==false?<input type="text" placeholder="Enter your email" onKeyUp={(e)=>setEmail(e.target.value)}/>:null}
            <br/>
            {isLogged==true?<input type="text" placeholder="Enter your email" onKeyUp={(e)=>setCheckEmail(e.target.value)}/>:null}
            <br/>
            {isLogged==false?<input type="text" placeholder="Enter your password" onKeyUp={(e)=>setPassword(e.target.value)}/>:null}
            <br/>
            {isLogged==true?<input type="text" placeholder="Enter your password" onKeyUp={(e)=>setCheckPassword(e.target.value)}/>:null}
            {isLogged==false? <button onClick={Reg_details}>Register</button>:null}            
            {isLogged==false ?<button onClick={()=>setStateLogged(true)}>LoginPage</button>:null}
            {isLogged==true?<h5>{JSON.stringify(user)}</h5>:null} 
            {isLogged==false?<h5>{JSON.stringify(user)}</h5>:null} 
            {isLogged==true ?<button onClick={()=>loginValidation()}>Login</button>:null}
            {isLogged==true? <button onClick={()=>setStateLogged(false)}>Register_page</button>:null}
            {isLogged=="true"?<h1>Welcome {details}</h1>:null}
                   
        </div>        
        </>

    )
    





}