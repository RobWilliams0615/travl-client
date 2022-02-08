import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    const response = await axios.get('http://localhost:8000/locations/');
    // setLocations(response.data);
    console.log(response.data);
  };
  getLocations();
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Welcome</h1>
      </header>
    </div>
  );
}

export default App;
