export default function Footer(props){
    let time=Date().toLocaleString()
    return (
        <>
        {props.stateLogged==true ?<h5>logged in at {time}</h5>:null}
       
               </>
    )
        
    
   
}