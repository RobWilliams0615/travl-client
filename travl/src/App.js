// import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Facilities from './components/Facilities';
import Locations from './components/Locations';
import Nav from './components/Nav';
// import { Route } from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([]);
  // const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  // const [hasError, setErrors] = useState(false);
  useEffect(() => {
    const getLocations = async () => {
      const response = await axios.get('http://localhost:8000/locations/');
      setLocations(response.data[0]);
      // console.log('locations', response.data[0]);
    };
    getLocations();

    // const getUsers = async () => {
    //   const response = await axios.get('http://localhost:8000/users/');
    //   // setUsers(response);
    //   console.log('users', response.data);
    // };
    // getUsers();

    const getFacilities = async () => {
      const response = await axios.get('http://localhost:8000/facilities/');
      setFacilities(response.data);
      console.log('facilities', response.data);
    };
    getFacilities();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Welcome to the Travl App</h1>
        {facilities.map((facilities) => (
          <ul>
            <li>{facilities.name}</li>
            <li>{facilities.details}</li>
            <li>{facilities.photo_url}</li>
            <li>{facilities.address}</li>
            <li>{facilities.phone}</li>
            <li>{facilities.email}</li>
            <li>{facilities.acc_entrance}</li>
            <li>{facilities.acc_restroom}</li>
            <li>{facilities.open_now}</li>
          </ul>
        ))}
      </header>
      <div>
        <Facilities facilities={facilities} />
        <Locations locations={locations} />
      </div>
      {/* <div>{facilities[0].name}</div> */}
    </div>
  );
}

export default App;
