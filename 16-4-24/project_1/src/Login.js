import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useParams } from "react-router-dom";

export default function Login(){
const navigate = useNavigate();
let { userId } = useParams();

    return(
        <>
        <center>
        <h1>Login page</h1>
        <label>Email:</label>
        <input type="email" placeholder="Enter your mail id"/>
        <br/>
        <label>Password:</label>
        <input type="password" placeholder="Enter your password"/>
        <br/>
        <button className="btn btn-primary" onClick={()=> navigate(`/register`)}>Register</button>
        <h6>User Id:{userId}</h6>
        <Link to="https://youtu.be/uKRo1Re_B8c?si=eg2V-an8vKxCMtqa">YouTube</Link>
        </center>
        </>
    )
}