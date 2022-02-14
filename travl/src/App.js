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
import UpdateForm from './components/UpdateForm';

function App() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const getFacilities = async () => {
      const response = await axios.get('http://localhost:8000/facilities/');
      setFacilities(response.data);
    };
    getFacilities();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div>
        <Switch>
          <Route exact path="/" />
          <Route
            exact
            path="/facilities"
            component={(props) => (
              <Facilities {...props} facilities={facilities} />
            )}
          />
          {/* <Route
            exact
            path="/facilities/:id/updateform/"
            component={(props) => <UpdateForm {...props} />}
          /> */}
          <Route
            path="/facilities/:id"
            component={(props) => (
              <FacilityDetails {...props} facilities={facilities} />
            )}
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
