import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function UserLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkuserlogin`, formData);
      if (response.data != null) {
        console.log(response.data);
        // Navigate to the desired route if needed
        // window.location.href = "http://localhost:3000/";
        window.location.href = "https://open.spotify.com/";

      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/526/27/desktop-wallpaper-blue-music-notes-backgrounds-music-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={backgroundStyle}>
      <b><h3 align="center"style={{ color: '#ffffff' }}><u>User Login</u></h3></b>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Login</button>
      </form>
    </div>
  );
}

