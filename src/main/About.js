import React from 'react';
import config from '../config';

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About MelodyHub</h1>
        <p style={styles.paragraph}>
          MelodyHub is your ultimate destination for all things music. We specialize in providing a platform for music lovers to explore, discover, and enjoy their favorite tunes. Whether you're into the latest hits, classic melodies, or niche genres, MelodyHub has something for everyone.
        </p>
        <p style={styles.paragraph}>
          Our specialty lies in curating a diverse collection of music from around the world, connecting artists and listeners, and fostering a vibrant community of music enthusiasts. With our intuitive interface, personalized recommendations, and seamless listening experience, we aim to elevate your music discovery journey.
        </p>
        <p style={styles.paragraph}>
          Join us today and immerse yourself in the endless world of music with MelodyHub!
        </p>
      </div>
      <img src="https://img.freepik.com/free-photo/guitar-is-front-wall-with-light-it_1340-33166.jpg?t=st=1710650539~exp=1710654139~hmac=e01fb7bd965f8ee9d6d591f8aa2819931ab020a887191983effb875a0fadf342&w=740" alt="About MelodyHub" style={styles.image} />
    </div>
  );
}

const styles = {
  container: {
    padding: '50px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row', // Align children horizontally
    animation: 'fadeIn 1s ease-in-out',
  },
  content: {
    flex: 1, // Take remaining space
    paddingRight: '100px', // Add some space between image and text
  },
  image: {
    maxWidth: '300px', // Adjust the width of the image as needed
    height: 'auto',
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
    color: '#2c3e50',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#555555',
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
};

