
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

export default function EditUser(props){
    // let local_details=localStorage.getItem("user_details")
    // let parsed_data=JSON.parse(local_details)  
    let {id} = useParams();
    const navigate = useNavigate();  
    const[editData,setEditData]=useState({
        title:"",
        body:"",
        userId:2,
        id:3
    })
    
    const edit=async ()=>{
        const editedData=await axios.put("https://jsonplaceholder.typicode.com/posts")
        // console.log("post",editedData)
        setEditData(editedData.data)
        console.log(editData)

    }  
    useEffect(()=>{
        edit()
    })
    const[editingData,setEditingData]=useState(
    editData.title)        
    
    const setEditDetails=()=>{
         let existing_data=editData;
         let new_data=[]
         existing_data.forEach((user_datas)=>{
            if(user_datas.title){
                new_data.push(editData)
            }
            else{
                new_data.push(user_datas)
            }
                console.log(new_data)
                navigate("/list");  

         })
        localStorage.setItem("user_details",JSON.stringify(new_data))
                
    }
       
    
    return(
            <>
                    <h1>You can edit your details here!!</h1>        
                    <input type="text" placeholder="Enter Your Name" defaultValue={editData.title} onKeyUp={(e)=>setEditData({
                        ...editData,
                        title:e.target.value
                    })}/>
                    <br/>
                    <input type="email" placeholder="Enter Your Email" defaultValue={editData.body} onKeyUp={(e)=>setEditData({
                        ...editData,
                        body:e.target.value
                    })}/>
                    <br/>
                    
                    <br/>
                    <button onClick={()=>setEditDetails()}>Edit</button>
                    {/* <h5>{JSON.stringify(editData)}</h5> */}
    
            
            </>    
    )
    }