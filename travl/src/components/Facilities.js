import React from 'react';

const Facilities = (props) => {
  console.log('props', props);
  return (
    <div>
      <h2>Facilities</h2>
      <div className="fac-list">
        <h3>{props.facilities.name}</h3>
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
