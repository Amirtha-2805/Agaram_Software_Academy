
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function EditUser(props){
    let {name} = useParams();
    const navigate = useNavigate();    
    const[editData,setEditData]=useState(
    props.user.filter((users)=>users.name==name)[0])        
    
    const setEditDetails=()=>{
         let existing_data=props.user;
         let new_data=[]
         existing_data.forEach((user_datas)=>{
            if(user_datas.name==name){
                new_data.push(editData)
            }
            else{
                new_data.push(user_datas)
            }
                console.log(new_data)
                navigate("/list");  

         })
                props.setUser(new_data)
    }
       
    
    return(
            <>
                    <h1>You can edit your details here!!</h1>        
                    <input type="text" placeholder="Enter Your Name" defaultValue={props.user.filter((users)=>users.name==name)[0]?.name} onKeyUp={(e)=>setEditData({
                        ...editData,
                        name:e.target.value
                    })}></input>
                    <br/>
                    <input type="email" placeholder="Enter Your Email" defaultValue={props.user.filter((users)=>users.name==name)[0]?.email} onKeyUp={(e)=>setEditData({
                        ...editData,
                        email:e.target.value
                    })}></input>
                    <br/>
                    <input type="password" placeholder="Enter Your Password" onKeyUp={(e)=>setEditData({
                        ...editData,
                        password:e.target.value
                    })}></input>
                    <br/>
                    <button onClick={()=>setEditDetails()}>Edit</button>
                    <h5>{JSON.stringify(editData)}</h5>
    
            
            </>    
    )
    }