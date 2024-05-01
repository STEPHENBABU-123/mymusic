import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'
import axios from 'axios';
import config from '../config';

import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewusers">View User</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewusers" Component={ViewUsers} exact/>
        </Routes>

    </div>
  )
}