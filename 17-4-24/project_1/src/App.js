
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Create from './Create';
import { useState } from 'react';
import ListUser from './list';
import ViewUser from './view';
import EditUser from './edit';
import Login from './login';

function App() {  
  let local_details=localStorage.getItem("user_details")
  let parsed_data=JSON.parse(local_details)  
  const[user,setUser]=useState(parsed_data)
  return (    
    <div className="App">
      <Router>
          <Routes>
            <Route path='/Create'  element={<Create user={user} setUser={setUser}/>}/>
            <Route  path='/list' element={<ListUser user={user} setUser={setUser}/>}/>
            <Route  path='/view/:name' element={<ViewUser user={user} setUser={setUser}/>}/>
            <Route  path='/edit/:name' element={<EditUser user={user} setUser={setUser}/>}/>
            <Route  path='/login' element={<Login parsed_data={parsed_data} />}/>

          </Routes>
      </Router>             
    <header className="App-header"> 
         
    </header>

       
    </div>

  );
}

export default App;
