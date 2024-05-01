import React, { useState } from 'react';
import config from '../config';
import placeholderImage1 from './Album1.jpeg'; // Import placeholder images
import placeholderImage2 from './Album2.jpeg';
import placeholderImage3 from './Album3.jpeg';

const Album = () => {
    // Dummy album data with placeholder images
    const album = [
        { id: 1, title: 'Shanmukh Jaswanth', artist: 'Subbu K', audio: 'Dum Masala.mp3', placeholder: placeholderImage1 },
        { id: 2, title: 'My Love is Gone', artist: 'Rahul Sipligunj', audio: 'song2.mp3', placeholder: placeholderImage2 },
        { id: 3, title: 'Sravani', artist: 'DSP', audio: 'song3.mp3', placeholder: placeholderImage3 },
    ];

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSong = (song) => {
        if (currentSong === song) {
            // If the same song is clicked, toggle play/pause
            setIsPlaying(prevState => !prevState);
        } else {
            // If a different song is clicked, play it
            setCurrentSong(song);
            setIsPlaying(true);
            // Your code to play audio
            console.log(`Playing ${song.audio}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ color: '#333' }}>Album</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {album.map(song => (
                    <div key={song.id} style={{ margin: '10px', width: '200px' }}>
                        <img src={song.placeholder} alt="Song" style={{ width: '100%', marginBottom: '10px' }} />
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                        <button onClick={() => playSong(song)}>
                            {currentSong === song && isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;

