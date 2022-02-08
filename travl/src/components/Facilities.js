import React from 'react';
import { useState, useEffect } from 'react';

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const getFacilities = async () => {
    const response = await axios.get('http://localhost:8000/facilities/');
    //setFacilities(response)
    console.log('facilities', response.data);
  };
  getFacilities();
};

return (
  <div>
    <h2>Facilities</h2>
    <div className="fac-list"></div>
    <div className="fac-details"></div>
  </div>
);

export default Facilities;
