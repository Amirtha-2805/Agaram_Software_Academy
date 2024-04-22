import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ViewUser(){
    let local_details=localStorage.getItem("user_details")
    let parsed_data=JSON.parse(local_details)  
    let {name} = useParams();
    
    return(
        <>
             <>
            <h1>You can view your email here!!</h1>
            <h3>Hii {name}</h3>
            <h2>Welcome!! {parsed_data.filter((userData)=>userData.name==name)[0].email}</h2>
            <Link to={`/list`}>user list</Link>        
        </>       
        </>
    )
}