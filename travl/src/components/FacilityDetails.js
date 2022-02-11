import { useEffect, useState } from 'react';

function FacilityDetails(props) {
  const [selectedFacility, setFacility] = useState('');
  console.log(props);

  useEffect(() => {
    let selectedFacility = props.facilities.find(
      (facilities) => facilities.id === parseInt(props.match.params.id)
    );
    setFacility(selectedFacility);
    // console.log(facilities);
  }, []);

  return (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedFacility.img} alt={selectedFacility.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{selectedFacility.name}</h1>
          <h1>Hello</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <h3>Price: ${selectedBoat.price}</h3> */}
          {/* <h3>Boat ID: {selectedBoat.id}</h3> */}
        </div>
        {/* <p>{selectedBoat.description}</p> */}
      </div>
    </div>
  );
}

export default FacilityDetails;
