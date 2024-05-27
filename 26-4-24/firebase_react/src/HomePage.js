import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom";

import { useEffect } from "react"
import { auth } from "./firebase"
export default function Home(){
    
    const navigate=useNavigate()

    const logout=()=>{
        localStorage.removeItem("firebase_token")
        navigate("/login")
    }

    useEffect(()=>{
                    onAuthStateChanged(auth,(user)=>{
                        if(user){
                            const uid=user.uid
                        }
                        else{
                            console.log("logged out")
                        }
                })
             })
    return(
        <>
            <h1>Home page</h1>
            <button type="button" onClick={logout}>Logout</button>
        </>
    )
}