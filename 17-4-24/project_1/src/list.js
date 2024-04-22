import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ListUser(props){
const navigate = useNavigate();    

    let local_details=localStorage.getItem("user_details")
    let parsed_data=JSON.parse(local_details) 
    let local_name=localStorage.getItem("check_name")
    let parsed_name=JSON.parse(local_name)  
    
    // console.log(parsed_data)               

// const[a,b]=useState()
// const changes=()=>{
//     alert(1)
// }

    const deleteUser=(index)=>{
        let remaining_users=parsed_data.filter((del_user,i)=>i!=index)
        localStorage.setItem("user_details",JSON.stringify(remaining_users))
        window.location.reload()
    }
    const logout=()=>{
        // localStorage.removeItem("user_details")
        alert("You are logged out")
        navigate("/login")
    }
   
    


            
            
        return(
            <>
         <h1>You can see the user list here!!</h1>             
        <center>
        <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete user</th>
                {/* <th>Create user</th> */}
            </tr>
        </thead>
        <tbody>       
            {parsed_data.map((users,i)=>{               
                    // console.log("user_name",users.name) 
                    if(users.name==parsed_name) {
                        return(           
                            <>                                             
                               <tr  key={i}  >                        
                                   <td >
                                       {users.name}
                                   </td>
                                   <td>
                                       {users.email}
                                   </td>
                                   <td>
                                       <Link to={`/view/${users.name}`}>view</Link>
                                    </td> 
                                    <td>
                                       <Link to={`/edit/${users.name}`}>Edit</Link>
                                    </td>                             
                                   <td>
                                       {/* <button type="button" onClick={()=>deleteUser(i)}>Delete</button> */}
                                        data cannot be deleted
                                    </td> 
                                                                                                                                                                                                                        
                               </tr>
                           </>
                       )
       
                    }  
                    else{
                        return(           
                            <>                                             
                               <tr  key={i}  >                        
                                   <td >
                                       {users.name}
                                   </td>
                                   <td>
                                       {users.email}
                                   </td>
                                   <td>
                                       <Link to={`/view/${users.name}`}>view</Link>
                                    </td> 
                                    <td>
                                       <Link to={`/edit/${users.name}`}>Edit</Link>
                                    </td>                             
                                   <td>
                                       <button type="button" onClick={()=>deleteUser(i)}>Delete</button>
                                        {/* data cannot be deleted */}
                                    </td> 
                                                                                                                                                                                                                        
                               </tr>
                           </>
                       )
       
                    }            
                            
 })}

        </tbody>
        </table> 
        </center>
        </>


        )
}



