import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  
const[quote, setQuote]= useState('');


const getQuote = async () => {
  const response = await axios.get("https://api.quotable.io/random");
    setQuote(response.data)

};
useEffect(() => {
  getQuote();
}, [])

  return (
    <div className='container'>
      <div className='card' style={{width:"100%",height:"500px",display:"flex", flexDirection:"column", alignItems:"center",padding:"30px", color:"white", backgroundColor:"transparent", fontSize:"26px"}}>
       <h2 style={{fontWeight:"700", fontSize:"36px"}}>{quote.content} </h2>
        
       <span class="text-end">
          {quote.author}</span>
      <button class="quote-button" onClick={getQuote}>Get More<i class="bi bi-chevron-right"  style={{fontSize:"20px",paddingLeft:"6px"}}></i></button>
        </div>
     
              
    </div>
   


  );
}

export default App;
