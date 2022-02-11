// import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Facilities from './components/Facilities';
import Locations from './components/Locations';
import Nav from './components/Nav';
import Users from './components/Users';
import Facility from './components/AddFacility';
import Footer from './components/Footer';
// import { Route } from 'react-router-dom';

function App() {
  const [locations] = useState([]);
  const [users] = useState([]);
  const [facilities] = useState([]);
  const delFacility = async () => {
    const response =
      await axios.delete`http://localhost:8000/facilities/${response}`();
    window.location.reload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <h1>Welcome to the Travl App</h1> */}
      </header>
      <div>
        <Facilities facilities={facilities} />
        <button className="facility-btn" onClick={delFacility}>
          Delete Facility
        </button>
        <Locations locations={locations} />
        <Users users={users} />
        <Facility />
        <Footer />
      </div>
      {/* <div>{facilities[0].name}</div> */}
    </div>
  );
}

export default App;
