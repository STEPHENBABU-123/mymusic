import React from 'react';
import config from '../config';
import placeholderImage1 from './placeholder1.jpeg'; // Import placeholder images
import placeholderImage2 from './placeholder2.webp';
import placeholderImage3 from './placeholder3.jpeg';


const Playlist = () => {
    // Dummy playlist data with placeholder images
    const playlist = [
        { id: 1, title: 'Dum Masala', artist: 'Sanjith Hegde & Thaman S', audio: 'Dum Masala.mp3', placeholder: placeholderImage1 },
        { id: 2, title: 'Naatu Naatu', artist: 'Rahul Sipligunj', audio: 'song2.mp3', placeholder: placeholderImage2 },
        { id: 3, title: 'Radhika Radhika', artist: 'Dhanunjai', audio: 'song3.mp3', placeholder: placeholderImage3 },
    ];

    const playSong = (audio) => {
        // Code to play audio
        console.log(`Playing ${audio}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ color: '#333' }}>Playlist</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {playlist.map(song => (
                    <div key={song.id} style={{ margin: '10px', width: '200px' }}>
                        <img src={song.placeholder} alt="Song" style={{ width: '100%', marginBottom: '10px' }} />
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                        <button onClick={() => playSong(song.audio)}>Play</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlist;
