import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Facilities(props) {
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
  const showFacility = (facility) => {
    props.history.push(`/facilities/${facility.id}`);
  };

  const delFacility = async (facility) => {
    const response = await axios.delete(
      `http://localhost:8000/facilities/${facility.id}`
    );
    window.location.reload();
  };
  return (
    <div className="fac-container">
      <div className="fac-list">
        {props.facilities.map((facility) => (
          <ul>
            <li className="fac-name">{facility.name}</li>
            <img src={facility.photo_url} />
            <li>{facility.details}</li>
            <li>{facility.address}</li>
            <li>{facility.phone}</li>
            <li>{facility.email}</li>
            <li>{facility.acc_entrance}</li>
            <li>{facility.acc_restroom}</li>
            <li>{facility.open_now}</li>
            <button className="dtl-btn" onClick={() => showFacility(facility)}>
              Details
            </button>
            <button
              className="facility-btn"
              onClick={() => delFacility(facility)}
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
