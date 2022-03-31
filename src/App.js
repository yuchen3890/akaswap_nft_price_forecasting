import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(()=>{
    axios({
      method: "GET",
      url:"http://localhost:5000/time",
    })
    .then((response) => {
      const res =response.data
      setCurrentTime(res.time)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        }
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
