import React from 'react';

const Facilities = (props) => {
  console.log('props', props);
  return (
    <div>
      <h2>Facilities</h2>
      <div className="fac-list">{props.facilities[0].name}</div>
      <div className="fac-details"></div>
    </div>
  );
};
export default Facilities;
