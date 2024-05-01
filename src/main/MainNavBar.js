import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import { FaHome, FaUser, FaAddressCard, FaSignInAlt, FaUserLock, FaEnvelope, FaMusic, FaCompactDisc } from 'react-icons/fa';
import UserLogin from './../user/UserLogin';
import AdminLogin from './../admin/AdminLogin';
import Registration from './../user/Registration';
import Album from './Album';
import Playlist from './Playlist';
import About from './About';
import Contact from './Contact';
import './style.css'
import config from '../config';


export default function MainNavBar() 
{
  return (
    
    <div>
       
       <nav>
        <ul>
            <Link to="/"><FaHome/>&nbsp;&nbsp;Home</Link>
            <Link to="/about"><FaAddressCard/>&nbsp;&nbsp;About</Link>
            <Link to="/playlist"><FaMusic/>&nbsp;&nbsp;Playlist</Link> {/* Link to Playlist */}
            <Link to="/album"><FaCompactDisc/>&nbsp;&nbsp;Album</Link> {/* Link to Album */}
            <Link to="/registration"><FaUser/>&nbsp;&nbsp;Registration</Link>
            <Link to="/userlogin"><FaSignInAlt/>&nbsp;&nbsp;User Login</Link>
            <Link to="/adminlogin"><FaUserLock/>&nbsp;&nbsp;Admin Login</Link>
            <Link to="/contact"><FaEnvelope/>&nbsp;&nbsp;Contact</Link>
        </ul>
        </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/playlist" element={<Playlist/>} exact/> {/* Route to Playlist */}
        <Route path="/album" element={<Album/>} exact/> {/* Route to Album */}
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/userlogin" element={<UserLogin/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
     </Routes>

    </div>
  )
}
