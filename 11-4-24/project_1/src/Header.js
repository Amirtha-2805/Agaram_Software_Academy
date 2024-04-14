export default function Header(props){
    return( 
        <>
        {props.stateLogged==false ? <h3>Hi!Guest</h3>:null }
        {props.stateLogged==true ? <h3>Hi! {"amirthanatarajan14@gmail.com"}</h3>:null }

        </>
    
)}

