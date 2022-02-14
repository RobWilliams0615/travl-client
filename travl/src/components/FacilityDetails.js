import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

function FacilityDetails(props) {
  const [selectedFacility, setFacility] = useState('');
  const [updating, setUpdating] = useState(false);
  const [updateFacility, setUpdateFacility] = useState({
    name: '',
    details: '',
    address: '',
    photo_url: '',
    phone: '',
    email: '',
    user_id: '',
    parking_info: '',
    acc_entrance: '',
    acc_restroom: '',
    open_now: ''
  });
  const toggleUpdate = () => {
    setUpdating(!updating);
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
      `http://localhost:8000/facilities/${selectedFacility.id}`,
      updateFacility
    );
    setFacility(response.data);
    toggleUpdate();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserFacility();
  };

  const grabFacById = async () => {
    const response = await axios.get(
      `http://localhost:8000/facilities/${props.match.params.id}`
    );
    setFacility(response.data);
  };
  useEffect(() => {
    grabFacById();
  }, []);
  return !updating ? (
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
    </div>
  ) : (
    <UpdateForm
      {...props}
      handleChange={handleChange}
      handleBooleans={handleBooleans}
      updateFacility={updateFacility}
      updateUserFacility={updateUserFacility}
    />
  );
}

export default FacilityDetails;
