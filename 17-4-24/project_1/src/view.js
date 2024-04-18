import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ViewUser(props){
    let {name} = useParams();
    return(
        <>
            <h1>You can view your email here!!</h1>
            <h3>Hii {name}</h3>
            <h2>Welcome!! {props.user.filter((userData)=>userData.name==name)[0].email}</h2>
            <Link to={`/list`}>user list</Link>        
        </>
    )
}