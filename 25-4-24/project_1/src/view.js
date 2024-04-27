import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { view } from "./redux/slices/counter";

export default function ViewUser(){
    const jsonData=useSelector((state)=>state.dummyJson) 
    const dispatch=useDispatch()
    let {id} = useParams();
    useEffect(()=>{        
        getPostById(id)
    },[id])
    
    const getPostById=async(userId)=>{
        const getPostData=await axios.get(`https:jsonplaceholder.typicode.com/posts/${userId}`)
        dispatch(view(getPostData))
    }
    return(
        <>
            <h1>You can view your email here!!</h1> 
            <h3>{JSON.stringify(jsonData.list.title)}</h3>  
            {jsonData.list.map((user,i)=>{
                if(user.id==id){
                    return(
                        <>                           
                            <h5>{user.title}</h5>
                        </>
                    )
                }
           })}                   
            <Link to={`/list`}>user list</Link>        
        </>
    )
}