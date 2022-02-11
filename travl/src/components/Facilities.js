import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [val, setVal] = useState('');
  const [newFacility, setNewFacility] = useState({
    name: '',
    details: '',
    photo_url: '',
    address: '',
    phone: '',
    email: '',
    acc_entrance: false,
    acc_restroom: false,
    open_now: false
  });
  // check crud from previous projects
  useEffect(() => {
    const getFacilities = async () => {
      const response = await axios.get('http://localhost:8000/facilities/');
      setFacilities(response.data);
    };
    getFacilities();
  }, []);

  return (
    <div className="fac-container">
      {/* <h2>Facilities</h2> */}
      <div className="fac-list">
        {/* <h2 className="fac-titl">Facilities</h2> */}
        {facilities.map((facilities) => (
          <ul>
            <li className="fac-name">{facilities.name}</li>
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
    </div>
  );
}
export default Facilities;
