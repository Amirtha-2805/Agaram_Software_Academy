
import './App.css';
import { useState } from 'react';
import Register from './Register'
import Login from './Login';


function App() {    
  const[isLogged,setStateLogged]=useState(false)
  const[userDetails,setUserDetails]=useState([])     
  return (    
    <div className="App">
      <Register isLogged={isLogged} setStateLogged={setStateLogged} userDetails={userDetails} setUserDetails={setUserDetails} />  
      <Login isLogged={isLogged} setStateLogged={setStateLogged} userDetails={userDetails} setUserDetails={setUserDetails}/>    
      <header className="App-header">           
      </header>     
    </div>
  );
}

export default App;
