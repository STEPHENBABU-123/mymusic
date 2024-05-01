import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';

const AdminHomePage = () => {
  return (
    <div style={containerStyle}>
        
      <h1 style={headingStyle}style={{ color: '#ffffff' }}>Welcome to MELODY HUB Admin Dashboard</h1>
      <div style={sectionStyle}>
        <b><h2 style={subheadingStyle}style={{ color: '#ffff00' }}>Manage Users</h2></b>
        <ul style={listStyle}>
          <li><Link to="/admin/users" style={linkStyle}>View Users</Link></li>
          <li><Link to="/admin/create-user" style={linkStyle}>Create User</Link></li>
          <li><Link to="/admin/manage-user-roles" style={linkStyle}>Manage User Roles</Link></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2 style={subheadingStyle}style={{ color: '#ffff00' }}>Manage Music</h2>
        <ul style={listStyle}>
          <li><Link to="/admin/songs" style={linkStyle}>View Songs</Link></li>
          <li><Link to="/admin/add-song" style={linkStyle}>Add Song</Link></li>
          <li><Link to="/admin/genres" style={linkStyle}>Manage Genres</Link></li>
          <li><Link to="/admin/artists" style={linkStyle}>Manage Artists</Link></li>
          <li><Link to="/admin/albums" style={linkStyle}>Manage Albums</Link></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2 style={subheadingStyle}style={{ color: '#ffff00' }}>Analytics</h2>
        <ul style={listStyle}>
          <li><Link to="/admin/analytics" style={linkStyle}>View Analytics</Link></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2 style={subheadingStyle}style={{ color: '#ffff00' }}>Settings</h2>
        <ul style={listStyle}>
          <li><Link to="/admin/profile" style={linkStyle}>Edit Profile</Link></li>
          <li><Link to="/admin/settings" style={linkStyle}>App Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  margin: '50px auto',
  maxWidth: '800px',
  padding: '20px',
  backgroundColor: '#000000', // Black padding
  color: '#ffffff', // White text
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '30px'
};

const subheadingStyle = {
  color: '#ffffff', // White subheadings
};

const sectionStyle = {
  marginBottom: '40px'
};

const listStyle = {
  listStyleType: 'none',
  padding: '0'
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px'
};

const imageStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '200px', // Adjust as needed
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px',
  };

export default AdminHomePage;



