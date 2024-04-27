//*************************************redux with firebase authentication****************************************//

import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Create from './Create';
import { useState,useEffect } from 'react';
import ViewUser from './view';
import EditUser from './edit';
import Login from './login';
import { useNavigate } from "react-router-dom";
import ListUser from './list'

function App() {  

 return (<div className="App">
              
        <Router>
          <Routes>            
              {/* <Route path='/' element={<Create user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} />}/> */}
              <Route  path='/list' element={<ListUser />}/>
              <Route  path='/view/:id' element={<ViewUser />}/>
              <Route  path='/edit/:id' element={<EditUser />}/>
              {/* <Route  path='/login' element={<Login parsed_data={parsed_data} />}/> */}
          </Routes>
      </Router>             

        <header className="App-header">          
        </header>       
      </div>) 
}
 
export default App;
