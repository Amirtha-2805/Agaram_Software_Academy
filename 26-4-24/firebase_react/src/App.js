import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Home from './HomePage';
import Signup from './Signup';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/homepage' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Signup />}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
