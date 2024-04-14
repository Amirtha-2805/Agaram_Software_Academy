import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './Script'
import Header from './Header';
import Register from './Register'
import Register_again from './Login';


function App() {
  
  const[stateLogged,setStateLog]=useState("")
  // const[user,setUsers]=useState([])

  
  return (    
    <div className="App">
      <Register />  
      {/* <Login />     */}
      <Header stateLogged={stateLogged} setStateLog={setStateLog} />      
      <header className="App-header">     

      
      </header>
      
      <Footer stateLogged={stateLogged} setStateLog={setStateLog}  />
      {/* {user==true ?<button>Login</button>:null} */}
    </div>

  );
}

export default App;
