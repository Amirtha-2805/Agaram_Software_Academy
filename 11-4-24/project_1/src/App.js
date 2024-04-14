import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './Script'
import Header from './Header';


function App() {
  const email="amirthanatarajan14@gmail.com"
  const[stateLogged,setStateLog]=useState("")
  
  return (    
    <div className="App">
<Header stateLogged={stateLogged} setStateLog={setStateLog} />      
<header className="App-header">     
{stateLogged==true ? <Header email={email}/>:null}
{stateLogged==false? <input type="password" placeholder='password'/>:null}    
{stateLogged==false? <input type="email" placeholder='email'/>:null}
{stateLogged==false? <button onClick={()=>setStateLog(true)}>Login</button>:null}
{stateLogged==true ? <h3>Welcome! {email}</h3>:null}
{stateLogged==true ? <button onClick={()=>setStateLog(false)}>Signout</button>:null}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        
      </header>
      
      <Footer stateLogged={stateLogged} setStateLog={setStateLog}  />
      
    </div>

  );
}

export default App;
