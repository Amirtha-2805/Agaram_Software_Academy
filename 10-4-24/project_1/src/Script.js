export default function Footer(props){
    return (
        <>
        {props.statelogged==true ?<h5>You are logged in successfully</h5>:null}
        <h6>Page no is 1</h6>
        {props.statelogged==false? <button onClick={()=>props.setStateLog(true)}>Login</button>:null}
        </>
    )
        
    
   
}