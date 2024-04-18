import { Link } from "react-router-dom";
export default function ListUser(props){
    const deleteUser=(index)=>{
        let remaining_users=props.user.filter((del_user,i)=>i!=index)
        props.setUser(remaining_users)
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
                <th>View user</th>
                <th>Edit user</th>
                <th>Delete user</th>
                <th>Create user</th>
            </tr>
        </thead>
        <tbody>
            {props.user.map((users,i)=>{
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
                            <button onClick={()=>deleteUser(i)}>Delete</button>                           
                             </td>
                             <td>
                                 <Link to='/create'>Create</Link>
                             </td>
                        </tr>
                    </>
                )
            })}

        </tbody>
        </table> 
        </center>           
        </>
    )

}