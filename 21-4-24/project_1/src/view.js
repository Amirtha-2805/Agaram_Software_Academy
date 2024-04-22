import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewUser(){
    let local_details=localStorage.getItem("user_details")
    let parsed_data=JSON.parse(local_details)  
    const[viewData,setViewData]=useState("")
    let {id} = useParams();
    useEffect(()=>{
        // console.log("Use effect concept")
        // viewPosts(id)
        getPostById(id)
    },[id])
    //method1
    // const viewPosts=(userId)=>{
    //     axios({
    //         method:"GET",
    //         url:`https://jsonplaceholder.typicode.com/posts/${userId}`
    //                 }).then((respond)=>{
    //                     setViewData(respond.data)
    //         })
    // }
//method2
    const getPostById=async(userId)=>{
        const getPostData=await axios.get(`https:jsonplaceholder.typicode.com/posts/${userId}`)
        setViewData(getPostData.data)
    }
    return(
        <>
            <h1>You can view your email here!!</h1>
            <h3>{viewData.title}</h3>            
            <Link to={`/list`}>user list</Link>        
        </>
    )
}