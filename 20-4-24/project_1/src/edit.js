
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
        userId:null,
        
    })
    
    const edit=async (paramId)=>{
        const editedData=await axios.get(`https://jsonplaceholder.typicode.com/posts/${paramId}`)
        // console.log("post",editedData)
        setEditData(editedData.data)
        console.log(editData)
    }  
    useEffect(()=>{
        edit(id)
    },[id])
         
    const setEditDetails=async (paramId)=>{
        const updatedData=await axios.put(`https:jsonplaceholder.typicode.com/posts/${paramId}`)       
        console.log(updatedData.data)                
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
                    <button onClick={()=>setEditDetails(id)}>Edit</button> 
                    <br/>
                     {JSON.stringify(editData)}

            </>    
    )
    }