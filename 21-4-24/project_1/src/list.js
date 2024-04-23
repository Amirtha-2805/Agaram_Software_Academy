import { useEffect, useState } from "react";
import axios from "axios";
export default function ListUser(props){

    const[posts,setPost]=useState([])      
    const member_details=()=>{
        axios({
            method:"GET",
            url:"https://agaram.academy/api/action.php",
            request:"getMemberDetail",
            // id:""
        }).then((response)=>{
            console.log(response)
            setPost(response)
        })
    }
    const delete_member=()=>{
        axios({
            method:"GET",
            url:"https://agaram.academy/api/action.php",
            request:"removeMember",
            // id:""
        }).then((response)=>{
            console.log("delete data",response)
            
        })
    }
        useEffect(()=>{
            member_details()
        },[])          
       return(
        <>
            <h1>Member details</h1>
            <h2>{JSON.stringify(posts)}</h2>
            <button type="button" onClick={()=>delete_member()}>Delete</button>
        </>
       )            
}



