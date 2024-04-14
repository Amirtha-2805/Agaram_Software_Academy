import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import Footer from './Script'


function App() {
  const name="Amirtha"
  const students=["Amirtha","Aishu","Aaradhya"]
  const[stateVariable,setStateFunc]=useState("Welcome to park")
  //method 1 of state
  // function changeValue(){
  //     setStateFunc("Welcome to Agaram")
  // }
  const[statelogged,setStateLog]=useState()
  return (
    <div className="App">
{/* method1 for conditional statement */}

       {/* {statelogged==true ? <Header name={name}/>:null}
      {statelogged==false ? <button onClick={()=>setStateLog(true)}>Login</button>:null}
      {statelogged==true ? <button onClick={()=>setStateLog(false)}>signout</button>:null} */}

{/* method2 for conditional statement*/}
      {/* { 
        statelogged == true ?
        <>
        <Header name="Amirtha"/>
        <button onClick={()=>setStateLog(false)}>signout</button>
        </>
        :
        <button onClick={()=>setStateLog(true)}>Login</button>      
      } */}

{/* method3 for conditional statement*/}
{statelogged && <Header name={name}/>}
{statelogged && <button onClick={()=>setStateLog(false)}>signout</button>}
{!statelogged && <button onClick={()=>setStateLog(true)}>Login</button>}

     

      <header className="App-header">
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
          Learn React {name}
        </a>
      {stateVariable}
{/* method2 */}
<button onClick={()=>{setStateFunc("Welcome to Agaram Academy")}}>Edit</button>
       {<ul>
        {students.map((stu,i)=>{return (<li key={i}>{stu}</li>)})}
       </ul> }
        
      </header>
      <Footer statelogged={statelogged} setStateLog={setStateLog}/>

    </div>
  );
}

export default App;
