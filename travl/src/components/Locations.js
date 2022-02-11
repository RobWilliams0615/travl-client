import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Locations(props) {
  console.log(props);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = async () => {
      const response = await axios.get('http://localhost:8000/locations/');
      setLocations(response.data);
    };
    getLocations();
  }, []);
  return (
    <div>
      <h2>Locations</h2>
      <div className="loc-list">
        {locations.map((locations) => (
          <ul>
            <li>{locations.city}</li>
            <li>{locations.state}</li>
            <li>{locations.country}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Locations;
