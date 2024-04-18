
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Create from './Create';
import { useState } from 'react';
import ListUser from './list';
import ViewUser from './view';
import EditUser from './edit';

function App() {   
  const[user,setUser]=useState([{name:"Amirtha",email:"ammu@gmail.com",passowrd:123}])
  return (    
    <div className="App">
      <Router>
          <Routes>
            <Route path='/Create'  element={<Create user={user} setUser={setUser}/>}/>
            <Route  path='/list' element={<ListUser user={user} setUser={setUser}/>}/>
            <Route  path='/view/:name' element={<ViewUser user={user} setUser={setUser}/>}/>
            <Route  path='/edit/:name' element={<EditUser user={user} setUser={setUser}/>}/>
          </Routes>
      </Router>             
    <header className="App-header"> 
         
    </header>

       
    </div>

  );
}

export default App;
