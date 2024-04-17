import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Register(){
const navigate = useNavigate();

   return(
    <>
    <center>
    <h1>Register page</h1>
       <label>Name:</label>
        <input type="text" placeholder="Enter your name"/>
      <br/>
       <label>Email:</label>
        <input type="email" placeholder="Enter your mail id"/>
        <br/>
        <label>Password:</label>
        <input type="password" placeholder="Enter your password"/>
        <br/>
        <button onClick={()=> navigate("/login")}>Login</button>
        <Link to="https://youtu.be/uKRo1Re_B8c?si=eg2V-an8vKxCMtqa" >YouTube</Link>

        </center>
    </>
   )
}