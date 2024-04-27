import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { create } from './redux/slices/counter';
import { useSelector,useDispatch } from 'react-redux';

export default function ListUser(){
    const jsonData=useSelector((state)=>state.dummyJson) 
    const dispatch=useDispatch()
    console.log("json data",jsonData)    
    useEffect(()=>{      
        getAllData()       
    },[])

    const deleteUser=async(id)=>{
        const deleteData=await axios.delete(`https:jsonplaceholder.typicode.com/posts/${id}`)       
       dispatch(create(jsonData.list.filter((post)=>{if(post.id!=id){
            return true
        }})))            
        console.log(deleteData.data)
    } 

    let getAllData= async()=>{
       
        let getData = await axios({method:"GET",url:"https://jsonplaceholder.typicode.com/posts"})
        dispatch(create(getData.data))   

     }         
            return (    
                <>
                        <h1>UserList</h1>
                        <table border={1}>
                            <thead>
                            <tr>
                                    <th>userId</th>
                                    <th>Id</th>
                                    <th>title</th>
                                    <th>body</th>
                                    <th>view</th>
                                    <th>edit</th>
                                    <th>delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {jsonData.list.map((users,i)=>{
                                    return(
                                         <>
                                        <tr key={i}>
                                            <td>{users.userId}</td>
                                            <td>{users.id}</td>
                                            <td>{users.title}</td>
                                            <td>{users.body}</td>
                                            <td><Link to={`/view/${users.id}`}>view</Link></td>
                                            <td><Link to={`/edit/${users.id}`}>Edit</Link></td>
                                            <td>
                                                <button type="button" onClick={()=>deleteUser(users.id)}>Delete</button>
                                            </td> 
                                        </tr>
                                        </>
                                     )
                                 })}
                            </tbody>
                        </table>       
                </>
  )
}

    

