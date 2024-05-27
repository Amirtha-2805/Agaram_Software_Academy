import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Home from './HomePage';
import Signup from './Signup';
import { setCreate, setIsLogged } from './redux/slices/counter';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const isLogged=useSelector((state)=>state.authenticationData.isLogged)
  console.log("authdata",isLogged)
  let dispatch=useDispatch()
  useEffect(()=>{
    if(!isLogged){
      if(localStorage.getItem("firebase_token")){
        dispatch(setIsLogged(true))
        checkAuth()
      }
    }
  },[])
  const checkAuth=async ()=>{
    await onAuthStateChanged(auth,(currentuser)=>{
      localStorage.setItem("firebase_token",currentuser.accessToken)
      dispatch(setCreate(currentuser))
      dispatch(setIsLogged(true))
    })
  }
  return (
    <div className="App">

      <Router>
        <Routes>
          {
               isLogged? <Route path='/homepage' element={<Home />}/>:null
          
          }    
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Signup />}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
