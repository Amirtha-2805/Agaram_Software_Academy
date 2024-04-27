import './App.css';
import { increment } from './redux/slices/counter';
import { decrement } from './redux/slices/counter';
import { incrementByAmount } from './redux/slices/counter';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const counterData=useSelector((state)=>state.counter)  
  const dispatch=useDispatch()
  return (
    <div className="App">
         Number:<h4>{counterData.value}</h4>        
        <button type='button' onClick={()=>dispatch(increment())}>Increment</button>
        <button type='button' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button type='button' onClick={()=>dispatch(incrementByAmount(100))}>Increment</button>
    </div>
  );
}
export default App;
