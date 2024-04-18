
import './App.css';
import Register from './Register'
import Login from './Login';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {    
  return (    
    <div className="App">
      <Router>
          <Routes>
            <Route path='/login/:userId' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>            
          </Routes>
      </Router>             
    <header className="App-header"> 
         
    </header>

       
    </div>

  );
}

export default App;
