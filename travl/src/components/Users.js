import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  // check crud from previous projects
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:8000/users/');
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <div className="fac-list">
        {users.map((users) => (
          <ul>
            <li>{users.first_name}</li>
            <li>{users.last_name}</li>
            <li>{users.email}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Users;
