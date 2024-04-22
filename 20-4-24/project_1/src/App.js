
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Create from './Create';
import { useState,useEffect } from 'react';
import ListUser from './list';
import ViewUser from './view';
import EditUser from './edit';
import Login from './login';
import { useNavigate } from "react-router-dom";
import CreateApi from './createApi';


function App() {  
  // const navigate = useNavigate();    

  let local_details=localStorage.getItem("user_details")
  let parsed_data=JSON.parse(local_details)  
  const[user,setUser]=useState(parsed_data)
  const[isLogged,setIsLogged]=useState(false)
//   useEffect(()=>{
//     if(user){
//      navigate("/create")
//      console.log("user")
//     }
//     else{
//      navigate("/login")
//     }
//  },[user])
  return (    
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Create user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} />}/>
            <Route  path='/list' element={<ListUser isLogged={isLogged} setIsLogged={setIsLogged} />}/>
            <Route  path='/view/:id' element={<ViewUser />}/>
            <Route  path='/edit/:id' element={<EditUser user={user} setUser={setUser}/>}/>
            <Route  path='/login' element={<Login parsed_data={parsed_data} />}/>
          </Routes>
      </Router>             
    <header className="App-header"> 
         
    </header>

       
    </div>

  );
}

export default App;
