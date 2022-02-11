// import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Facilities from './components/Facilities';
import Locations from './components/Locations';
import Nav from './components/Nav';
import Users from './components/Users';
import AddFacility from './components/AddFacility';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  console.log(props);
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
        <Routes>
          {/* <button className="facility-btn" onClick={delFacility}>
            Delete Facility
          </button> */}
          <Route path="/" element={<App />} exact />
          <Route path="/facilities" element={<Facilities />} exact />
          <Route path="/locations" element={<Locations />} exact />
          <Route path="/addFacility" element={<AddFacility />} exact />
        </Routes>
        <Footer />
      </div>
      {/* <div>{facilities[0].name}</div> */}
    </div>
  );
}

export default App;
