import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
export default function Home(){
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
        </>
    )
}