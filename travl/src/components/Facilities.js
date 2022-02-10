import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Facilities() {
  const [facilities, setFacilities] = useState([]);
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
  // check crud from previous projects
  useEffect(() => {
    const getFacilities = async () => {
      const response = await axios.get('http://localhost:8000/facilities/');
      setFacilities(response.data);
    };
    getFacilities();

    // const addFacility = async (e) => {
    //   e.preventDefault();
    //   const response = await axios.post('http://localhost:8000/facilities/')
    //   let lastEle = response.data.facilities.slice(-1)[0].id;
    //   PaymentResponse.history.push('http://localhost:8000/facilities/')
    // }
  }, []);

  return (
    <div>
      <h2>Facilities</h2>
      <div className="fac-list">
        {facilities.map((facilities) => (
          <ul>
            <li>{facilities.name}</li>
            <li>{facilities.details}</li>
            <li>{facilities.photo_url}</li>
            <li>{facilities.address}</li>
            <li>{facilities.phone}</li>
            <li>{facilities.email}</li>
            <li>{facilities.acc_entrance}</li>
            <li>{facilities.acc_restroom}</li>
            <li>{facilities.open_now}</li>
          </ul>
        ))}
        <form
          className="create-form"
          // onSubmit={addFacility}
        >
          <h3>Create Facility</h3>
          <img
            className="blank-image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OKJB0ZYbFTUVCdfsZHvpEwHaHa%26pid%3DApi&f=1"
          />
          <input
            className="test"
            id="name"
            type="text"
            name="name"
            // onChange={handleChange}
            value={newFacility.name}
            placeholder={'Enter Facility name:'}
          ></input>
          <input
            id="details"
            type="text"
            name="details"
            // onChange={handleChange}
            value={newFacility.details}
            placeholder={'Enter details about facility:'}
          ></input>
          <input
            id="image"
            type="text"
            name="image"
            // onChange={handleChange}
            value={newFacility.photo_url}
            placeholder={'Enter image URL:'}
          ></input>
          <input
            id="address"
            type="text"
            name="address"
            // onChange={handleChange}
            value={newFacility.address}
            placeholder={'Enter facility address:'}
          ></input>
          <input
            id="phone"
            type="text"
            name="phone"
            // onChange={handleChange}
            value={newFacility.phone}
            placeholder={'Enter phone number:'}
          ></input>
          <input
            id="email"
            type="text"
            name="email"
            // onChange={handleChange}
            value={newFacility.email}
            placeholder={'Enter email address:'}
          ></input>
          <input
            id="parking_info"
            type="text"
            name="parking_info"
            // onChange={handleChange}
            value={newFacility.parking_info}
            placeholder={'Accessible parking?:'}
          ></input>
          <label htmlFor="acc_entrance">Accessible entrance?</label>
          <select
            id="acc_entrance"
            // onChange={handleBooleans}
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
            // onChange={handleBooleans}
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
            // onChange={handleBooleans}
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
    </div>
  );
}
export default Facilities;
