import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewusers`);
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Users</h1>

        <table border={1} style={{ margin: '0 auto', width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.fullname}</td>
                  <td>{user.gender}</td>
                  <td>{user.dateofbirth}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>{user.contact}</td>
                  <td>
                    <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Data Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
