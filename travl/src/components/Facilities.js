import React from 'react';

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
  </div>
);

export default Facilities;
