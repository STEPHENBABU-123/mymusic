import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';


export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) {
        navigate("/adminhome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div style={{...pageContainerStyle, backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/526/27/desktop-wallpaper-blue-music-notes-backgrounds-music-background.jpg)'}}>
      <div style={loginContainerStyle}>
      
        <h3 style={{ ...headingStyle, color: 'white' }}><u>Admin Login</u></h3>
        {message ? <h4 style={messageStyle}>{message}</h4> : <h4 style={errorStyle}>{error}</h4>}
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} style={inputStyle} required />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} required />
          </div>
          <button type="submit" style={submitButtonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

// Inline CSS styles
const pageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Ensures full viewport height
};

const loginContainerStyle = {
  maxWidth: '400px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  textDecoration: 'underline',
};

const messageStyle = {
  color: '#28a745', // Green color for success message
};

const errorStyle = {
  color: '#dc3545', // Red color for error message
};

const inputGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
};
