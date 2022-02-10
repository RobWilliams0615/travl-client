import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  // console.log('props', props);
  // USE SNOWBOARD mountain trails project as template for mapping
  // check crud from previous projects
  useEffect(() => {
    const getFacilities = async () => {
      const response = await axios.get('http://localhost:8000/facilities/');
      setFacilities(response.data);
      console.log('facilities', response.data);
    };
    getFacilities();
  }, []);
  return (
    <div>
      <h2>Facilities</h2>
      <div className="fac-list">
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
      </div>
      <div className="fac-details"></div>
    </div>
  );
}
export default Facilities;
