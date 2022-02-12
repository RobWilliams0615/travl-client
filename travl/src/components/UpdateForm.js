import React from 'react';

const UpdateForm = ({
  handleChange,
  handleBooleans,
  updateFacility,
  updateUserFacility
}) => {
  return (
    <div>
      <div className="grid-container-facility">
        <form className="update-form" onSubmit={updateUserFacility}>
          <h3>Update Facility</h3>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={updateFacility.name}
            placeholder={'Enter Facility name:'}
          ></input>
          <input
            id="details"
            type="text"
            name="details"
            onChange={handleChange}
            value={updateFacility.details}
            placeholder={'Enter details about facility:'}
          ></input>
          <input
            id="photo_url"
            type="text"
            name="photo_url"
            onChange={handleChange}
            value={updateFacility.photo_url}
            placeholder={'Enter image URL:'}
          ></input>
          <input
            id="address"
            type="text"
            name="address"
            onChange={handleChange}
            value={updateFacility.address}
            placeholder={'Enter facility address:'}
          ></input>
          <input
            id="user_id"
            type="number"
            name="user_id"
            onChange={handleChange}
            value={updateFacility.user_id}
            placeholder={'Select User:'}
          ></input>
          <input
            id="phone"
            type="text"
            name="phone"
            onChange={handleChange}
            value={updateFacility.phone}
            placeholder={'Enter phone number:'}
          ></input>
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            value={updateFacility.email}
            placeholder={'Enter email address:'}
          ></input>
          <input
            id="parking_info"
            type="text"
            name="parking_info"
            onChange={handleChange}
            value={updateFacility.parking_info}
            placeholder={'Accessible parking?:'}
          ></input>
          <label htmlFor="acc_entrance">Accessible entrance?</label>
          <select
            id="acc_entrance"
            onChange={handleBooleans}
            name="acc_entrance"
            id="acc_entrance"
            value={updateFacility.acc_entrance}
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
            value={updateFacility.acc_restroom}
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
            value={updateFacility.open_now}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <input
            type="submit"
            className="upt-fac-btn"
            value="Update Facility"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
