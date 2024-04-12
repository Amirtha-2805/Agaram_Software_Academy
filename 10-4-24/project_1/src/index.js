import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h2>Welcome to react</h2>
  
  <Add />
  <App />
  {/* <Header /> */}

  </React.StrictMode>
);
function Add(){
  let a=10;
  let b=20;
  let c=a+b
  return <h2>Addition of two numbers is={c}</h2>
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
