// import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Facilities from './components/Facilities';
import Locations from './components/Locations';
import Nav from './components/Nav';
import Users from './components/Users';
// import { Route } from 'react-router-dom';

function App() {
  const [locations] = useState([]);
  const [users] = useState([]);
  const [facilities] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Welcome to the Travl App</h1>
      </header>
      <div>
        <Facilities facilities={facilities} />
        <Locations locations={locations} />
        <Users users={users} />
      </div>
      {/* <div>{facilities[0].name}</div> */}
    </div>
  );
}

export default App;
