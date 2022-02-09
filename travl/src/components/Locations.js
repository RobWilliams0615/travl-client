import React from 'react';

const Locations = (props) => {
  console.log('props', props);
  return (
    <div>
      <h2>Locations</h2>
      <div className="loc-list">
        <h3>{props.locations.country}</h3>
        <h3>{props.locations.state}</h3>
        <h3>{props.locations.city}</h3>
        {/* <h3>{props.locations.address}</h3> */}
      </div>
      <div className="loc-details"></div>
    </div>
  );
};
export default Locations;
