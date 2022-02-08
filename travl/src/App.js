import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const getLocations = async () => {
    const response = await axios.get('http://localhost:8000/locations/');
    // setLocations(response.data);
    // console.log('locations', response.data);
  };
  getLocations();

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/users/');
    // setUsers(response);
    // console.log('users', response.data);
  };
  getUsers();

  const getFacilities = async () => {
    const response = await axios.get('http://localhost:8000/facilities/');
    //setFacilities(response)
    // console.log('facilities', response.data);
  };
  getFacilities();
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
