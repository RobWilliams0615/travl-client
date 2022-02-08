import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    const response = await axios.get('http://localhost:8000/locations/');
    // setLocations(response);
    console.log(response.data.id);
  };
  getLocations();
  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
      </header>
    </div>
  );
}

export default App;
