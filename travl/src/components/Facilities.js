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
      <div className="fac-list">
        {facilities.map((facilities) => (
          <ul>
            <li className="fac-name">{facilities.name}</li>
            <img src={facilities.photo_url} />
            <li>{facilities.details}</li>
            <li>{facilities.photo_url}</li>
            <li>{facilities.address}</li>
            <li>{facilities.phone}</li>
            <li>{facilities.email}</li>
            <li>{facilities.acc_entrance}</li>
            <li>{facilities.acc_restroom}</li>
            <li>{facilities.open_now}</li>
            <button
              className="facility-btn"
              // onClick={delFacility}
            >
              Delete Facility
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Facilities;
