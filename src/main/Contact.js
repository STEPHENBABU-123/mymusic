import React from 'react';
import config from '../config';

const ContactPage = () => {
  return (
    
    <div style={backgroundStyle}>
      <h1 style={yellowTextStyle}>Contact Us</h1>
      <p style={yellowTextStyle}>Have questions or feedback? Reach out to us using the form below:</p>
      <form style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={inputStyle} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={inputStyle} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" style={textareaStyle} required></textarea>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

// Inline CSS styles
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

const yellowTextStyle = {
  color: 'Yellow',
  marginBottom: '20px',
  fontWeight: 'bold', // Making the text bold
  fontSize: '24px', // Adjusting font size for attraction
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default ContactPage;
