import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

function FacilityDetails(props) {
  const [selectedFacility, setFacility] = useState('');
  const [update, setUpdate] = useState(false);
  const [display, setDisplay] = useState(true);
  const [updateFacility, setUpdateFacility] = useState('');
  const toggleUpdate = () => {
    props.history.push(`http://localhost:8000/updateform`);
    window.location.reload();
  };

  const handleChange = (e) => {
    setUpdateFacility({ ...updateFacility, [e.target.name]: e.target.value });
  };

  const handleBooleans = (e) => {
    let bool_value = e.target.value === 'true' ? true : false;
    setUpdateFacility({ ...updateFacility, [e.target.name]: bool_value });
  };

  const updateUserFacility = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:8000/facilities/${selectedFacility}`,
      updateFacility
    );
    // window.location.reload();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserFacility();
    props.history.push(`http://localhost:8000/facilities/${selectedFacility}`);
  };

  useEffect(() => {
    let selectedFacility = props.facilities.find(
      (facility) => facility.id === parseInt(props.match.params.id)
    );
    setFacility(selectedFacility);
  }, []);

  // restructure html for details
  // update fac function
  console.log(selectedFacility);

  return selectedFacility ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedFacility.photo_url} alt={selectedFacility.name} />
        <div>
          <h1>{selectedFacility.name}</h1>
          <h1>{selectedFacility.details}</h1>
          <h1>{selectedFacility.address}</h1>
          <h1>{selectedFacility.phone}</h1>
          <h1>{selectedFacility.email}</h1>
          <h1>{selectedFacility.parking_info}</h1>
          <h1>{selectedFacility.acc_entrance}</h1>
          <h1>{selectedFacility.acc_restroom}</h1>
          <h1>{selectedFacility.open_now}</h1>
        </div>
      </div>
      <button className="profile-btn" onClick={toggleUpdate}>
        Update Profile
      </button>
      <div>{/* <UpdateForm /> */}</div>
    </div>
  ) : (
    <div className="user-info">
      <UpdateForm
        {...props}
        handleChange={handleChange}
        handleBooleans={handleBooleans}
        updateFacility={updateFacility}
        updateUserProfile={updateUserFacility}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default FacilityDetails;
