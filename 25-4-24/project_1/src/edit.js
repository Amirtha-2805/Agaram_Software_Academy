import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { update } from "./redux/slices/counter";
import { create } from "./redux/slices/counter";

export default function EditUser(){
    const dispatch=useDispatch()
    const jsonData=useSelector((state)=>state.dummyJson) 
    let {id} = useParams();
            
    const edit=async (paramId)=>{
        const getDataForEdit=await axios.get(`https://jsonplaceholder.typicode.com/posts/${paramId}`)
        console.log("get data",getDataForEdit)
        dispatch(create(getDataForEdit.data))
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
                    {JSON.stringify(jsonData.edit)} 
                    <br/>

                    <input type="text" placeholder="Enter Your Title" defaultValue={jsonData.list.title} onKeyUp={(e)=>dispatch(update({
                        ...jsonData.edit,
                        title:e.target.value
                    }))}/>
                    <br/>
                    <input type="text" placeholder="Enter Your Body" defaultValue={jsonData.list.body} onKeyUp={(e)=>dispatch(update({
                        ...jsonData.edit,
                        body:e.target.value
                    }))}/>
                    <br/>                    
                    <br/>
                    <button onClick={()=>setEditDetails(id)}>Edit</button> 
                    
                    <br/>
            </>    
    )
    }