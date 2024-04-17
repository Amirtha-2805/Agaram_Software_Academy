import { useState } from "react"
export default function Login(props){
    const[checkEmail,setCheckEmail]=useState("")
    const[checkPassword,setCheckPassword]=useState("")
    const[setEmailPwd,setStateEmailpwd]=useState("")
    const date=new Date();
    let today=date.getDate()
    let month=date.getMonth()+1
    let year=date.getFullYear()    
    let fullDate=`${today}-${month}-${year}`
    let time=date.toLocaleTimeString()
    
    const LoginValidation=()=>{
        if(checkEmail==""||checkPassword==""){
            alert("please fill out requirred details")
        }
        for(let each of props.userDetails){                
            if((each.email==checkEmail)&&(each.password==checkPassword)){
                setStateEmailpwd(each.email)
                props.setStateLogged("true")
            }                      
        }                   
       } 

   return(
      <>
            {props.isLogged==true ? <h1>LoginPage</h1>:null}           
            {props.isLogged==true ? <input type="email" placeholder="Enter your email" onKeyUp={(e)=>setCheckEmail(e.target.value)}/>:null}
            <br/>
            {props.isLogged==true ? <input type="password" placeholder="Enter your password" onKeyUp={(e)=>setCheckPassword(e.target.value)}/>:null}
            <br/>
            {props.isLogged==true? <button onClick={()=>LoginValidation()}>Login</button>:null}
            {props.isLogged==true? <button onClick={()=>props.setStateLogged(false)}>Register Page</button>:null}
            {props.isLogged==true?<h5>{JSON.stringify(props.userDetails)}</h5>:null}
            {props.isLogged=="true" ?<h1>Welcome!...{setEmailPwd}</h1>:null}
            <br/>
            {props.isLogged=="true" ?<h5>Logged in at {fullDate},{time}</h5>:null}
            {props.isLogged=="true" ?<button onClick={()=>props.setStateLogged(true)}>Sign Out</button>:null}
      </>
   )
     
   }