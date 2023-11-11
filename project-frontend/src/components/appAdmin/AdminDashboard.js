
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../../styles/AdminDashboard.css';


const AdminDashboard = () => {


  return (
    <div className='admin-dashboard'>
      <h1>Admin Dashboard</h1>
     
      <Link to="/admin-notice" className="admin-button">Admin Notice</Link>
      <Link to="/notice-list-admin" className="admin-button">Notice List</Link>
      <Link to="/reports" className="admin-button">Report List</Link>

      {/* <Link to="/admin-login" className="admin-button">Admin Login</Link> */}
      {/* <Link to="/admin-logout" className="admin-button">Admin Logout</Link> */}
          
    </div>
  );
};

export default AdminDashboard;
