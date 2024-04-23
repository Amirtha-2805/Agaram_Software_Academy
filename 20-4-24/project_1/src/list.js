import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
export default function ListUser(props){
const navigate = useNavigate();    

    const[posts,setPost]=useState([])
    const[isloaded,setIsLoaded]=useState(true)
    const deleteUser=async(id)=>{
        const deleteData=await axios.delete(`https:jsonplaceholder.typicode.com/posts/${id}`)       
        setPost(posts.filter((post)=>{if(post.id!=id){
            return true
        }}))        
        // getPosts()       
        console.log(deleteData.data)
    }       
    // const deleteUser=(id)=>{
    //     // let remaining_users=parsed_data.filter((del_user,i)=>i!=index)
    //     // localStorage.setItem("user_details",JSON.stringify(remaining_users))
    //     // window.location.reload()
    //     axios({
    //         method:"DELETE",
    //         url:`https://jsonplaceholder.typicode.com/posts/${id}`
    //     }).then((response)=>{
    //        setPost(posts.filter((post)=>post.id!=id))
    //         console.log(response.data)            
    // })
    // }

    
    useEffect(()=>{      
        getPosts()       
    },[])
    
const getPosts=async()=>{
// method1
    // axios({
    //             method:"GET",
    //             url:"https://jsonplaceholder.typicode.com/posts"
    //         }).then((response)=>{
    //             setPost(response.data)
    //             console.log(response)
    //             setIsLoaded(false)
    //     })
// method2
        let getData=await axios({method:"GET",url:"https://jsonplaceholder.typicode.com/posts"})
        setPost(getData.data)
        setIsLoaded(false)
}                                
    return(
        <>
         <h1>You can see the user list here!!</h1>        
        {isloaded==true ? <>         
             <Spinner animation="border" role="status">
                 <span className="visually-hidden">Loading...</span>
            </Spinner>
               </> 
            :        
        <>
        <center>
        <table border="1" className="table table-bordered">
        <thead>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
                <th>Delete user</th>
                <th>View</th>
                <th>Edit</th>
                {/* <th>Create user</th> */}
            </tr>
        </thead>
        <tbody>       
            {posts.map((users,i)=>{                                                   
                return(           
                     <>                                             
                        <tr  key={i}  >                        
                            <td >
                                {users.userId}
                            </td>
                            <td>
                                {users.id}
                            </td>
                            <td>
                                {users.title}
                                
                            </td>
                            <td>
                                {users.body}                                
                            </td>
                            <td>
                                <button type="button" onClick={()=>deleteUser(users.id)}>Delete</button>
                             </td> 
                             <td>
                                <Link to={`/view/${users.id}`}>View</Link>
                             </td>
                             <td>
                                <Link to={`/edit/${users.id}`}>Edit</Link>
                             </td>                                                                                                                                                                                                                
                        </tr>
                    </>
                )            
 })}
        </tbody>
        </table> 
        </center>
        </>
    } 
    </>
    )
    }



