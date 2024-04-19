import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useState } from "react";
export default function ListUser(props){
    let local_details=localStorage.getItem("user_details")
    let parsed_data=JSON.parse(local_details)  
    // console.log(parsed_data)               

// useEffect(()=>{
//     console.log("Use effect concept")
// },[])
// const[a,b]=useState()
// const changes=()=>{
//     alert(1)
// }
    const deleteUser=(index)=>{
        let remaining_users=parsed_data.filter((del_user,i)=>i!=index)
        localStorage.setItem("user_details",JSON.stringify(remaining_users))
    }
//     { parsed_data.map((value,i)=>{
//         if(value.name!="Ammu"){
//             return(
//                 <>
//                 <td>
//                     <button onClick={()=>deleteUser(i)}>Delete</button>                           
//                 </td>
//                 </>
//             )
// }
// })
// }
    return(
        <>
        {/* {a} */}
        <h1>You can see the user list here!!</h1>
        <center>
        <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>View user</th>
                <th>Edit user</th>
                <th>Delete user</th>

                {/* <th>Create user</th> */}

            </tr>
        </thead>
        <tbody>
       
            {parsed_data.map((users,i)=>{

                if(users.name=="Amirtha"){
                    return(
                        <>     
                            <td>
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
                                cannot be deleted                               
                            </td>
                            
                            </>
                    )
                }
                if(users.name!="Amirtha"){
                    // console.log("user_name",users.name)                
                return(                   
                     <>                         
                        <tr key={i}>                        
                            <td>
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

                             </td>
                             
                                                         
                        </tr>
                    </>
                )
 } })}

        </tbody>
        </table> 
        {/* <button onClick={()=>b()}>Change value</button> */}
        {/* <Link to='/create'>Create</Link> */}

        </center>           
        </>
    )

}