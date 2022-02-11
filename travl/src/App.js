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
import { Route, Switch } from 'react-router-dom';
import FacilityDetails from './components/FacilityDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={<App />} />
          {/* <Route exact path="/" component={(props) => <App {...props} />} /> */}
          <Route
            path="/facilities"
            component={(props) => <Facilities {...props} />}
          />
          <Route
            path="/facilities/:id"
            component={(props) => <FacilityDetails {...props} />}
          />
          <Route
            path="/locations"
            component={(props) => <Locations {...props} />}
          />
          <Route
            path="/addfacility"
            component={(props) => <AddFacility {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
