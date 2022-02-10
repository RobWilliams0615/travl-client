import React, { useState, useEffect } from 'react';

const Facilities = (props) => {
  const [facilities, setFacilities] = useState([]);
  console.log('props', props);
  // USE SNOWBOARD mountain trails project as template for mapping
  // check crud from previous projects
  return (
    <div>
      <h2>Facilities</h2>
      <div className="fac-list">
        <h3>{props.facilities.name}</h3>
        {/* {facilities.map((fac, id) => (
          <h3 key={idx}>{rest}</h3>
        ))} */}
        <h3>{props.facilities.details}</h3>
        <h3>{props.facilities.photo_url}</h3>
        <h3>{props.facilities.address}</h3>
        <h3>{props.facilities.phone}</h3>
        <h3>{props.facilities.email}</h3>
        <h3>{props.facilities.parking_info}</h3>
        <h3>{props.facilities.acc_entrance}</h3>
        <h3>{props.facilities.acc_restroom}</h3>
        <h3>{props.facilities.open_now}</h3>
      </div>
      <div className="fac-details"></div>
    </div>
  );
};
export default Facilities;
