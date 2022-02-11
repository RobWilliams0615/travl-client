import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Facilities from './Facilities';

const Facility = (props) => {
  console.log(props);
  const [facilities] = useState([]);
  const [newFacility, setNewFacility] = useState({
    name: '',
    details: '',
    photo_url: '',
    address: '',
    phone: '',
    email: '',
    parking_info: '',
    acc_entrance: false,
    acc_restroom: false,
    open_now: false
  });
  // console.log(newFacility);
  const [validate, setValidate] = useState('');

  const addFacility = async (e) => {
    e.preventDefault();
    if (
      newFacility.name === '' ||
      newFacility.details === '' ||
      newFacility.photo_url === '' ||
      newFacility.address === '' ||
      newFacility.phone === '' ||
      newFacility.email === '' ||
      newFacility.parking_info === '' ||
      newFacility.acc_entrance === '' ||
      newFacility.acc_restroom === '' ||
      newFacility.open_now === ''
    ) {
      setValidate('Fields Required');
    } else {
      const response = await axios.post(
        `http://localhost:8000/facilities/`,
        newFacility
      );
      const resp = await axios.get('http://localhost:8000/facilities/');
      let pushedEl = resp.data.facilities.slice(-1)[0].id;
      props.history.push(`/http:/localhost:8000/facilities/${pushedEl}`);
      window.location.reload();
    }
  };
  const handleChange = (e) => {
    setNewFacility({ ...newFacility, [e.target.name]: e.target.value });
  };

  const handleBooleans = (e) => {
    let bool_val = e.target.value === 'true' ? true : false;
    setNewFacility({ ...newFacility, [e.target.name]: bool_val });
  };
  // let id = props.match.params.id;
  const delFacility = async () => {
    const response =
      await axios.delete`http://localhost:8000/facilities/${response.data.facilities.id}`();
    window.location.reload();
  };

  return (
    <div>
      <form className="create-form" onSubmit={addFacility}>
        <h3>Create Facility</h3>
        <button className="facility-btn" onClick={delFacility}>
          Delete Facility
        </button>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={newFacility.name}
          placeholder={'Enter Facility name:'}
        ></input>
        <input
          id="details"
          type="text"
          name="details"
          onChange={handleChange}
          value={newFacility.details}
          placeholder={'Enter details about facility:'}
        ></input>
        <input
          id="photo_url"
          type="text"
          name="photo_url"
          onChange={handleChange}
          value={newFacility.photo_url}
          placeholder={'Enter image URL:'}
        ></input>
        <input
          id="address"
          type="text"
          name="address"
          onChange={handleChange}
          value={newFacility.address}
          placeholder={'Enter facility address:'}
        ></input>
        <input
          id="phone"
          type="text"
          name="phone"
          onChange={handleChange}
          value={newFacility.phone}
          placeholder={'Enter phone number:'}
        ></input>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={newFacility.email}
          placeholder={'Enter email address:'}
        ></input>
        <input
          id="parking_info"
          type="text"
          name="parking_info"
          onChange={handleChange}
          value={newFacility.parking_info}
          placeholder={'Accessible parking?:'}
        ></input>
        <label htmlFor="acc_entrance">Accessible entrance?</label>
        <select
          id="acc_entrance"
          onChange={handleBooleans}
          name="acc_entrance"
          id="acc_entrance"
          value={newFacility.acc_entrance}
          placeholder={'Accessible Entrance?:'}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <label htmlFor="acc_restroom">Accessible Restroom?</label>

        <select
          id="acc_restroom"
          name="acc_restroom"
          id="acc_restroom"
          onChange={handleBooleans}
          value={newFacility.acc_restroom}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <label htmlFor="open_now">Open Now?</label>

        <select
          id="open_now"
          name="open_now"
          id="open_now"
          onChange={handleBooleans}
          value={newFacility.open_now}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        {/* <div className="validate-msg" style={{ color: 'red' }}>
          {validate}
        </div> */}
        <input
          type="submit"
          className="crt-fac-btn"
          value="Create Facility"
        ></input>
      </form>
    </div>
  );
};

export default Facility;
