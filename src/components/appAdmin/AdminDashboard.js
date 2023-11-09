// AdminDashboard.js (or your main admin component)

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const AdminDashboard = () => {
//     const [userComplaints, setUserComplaints] = useState([]);

// const onSubmitComplaint = (complaint) => {
//   setUserComplaints([...userComplaints, complaint]);
// };
//   // Assume you have a state to store complaints received from users
//   const [complaints, setComplaints] = useState([]);
// //   const [notices, setNotices] = useState([]);
  
// //   const addNotice = (notice) => {
// //     setNotices([...notices, notice]);
// //   };


//   // You might fetch complaints from an API or other data source
//   useEffect(() => {
//     // Simulate fetching complaints (replace with your actual data fetching logic)
//     const fetchedComplaints = [
//       { subject: 'Issue 1', message: 'This is the first complaint message.' },
//       { subject: 'Issue 2', message: 'This is the second complaint message.' },
//       // Add more complaints here
//     ];

//     setComplaints(fetchedComplaints);
//   }, []); // Run the effect once on component mount

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
            <ul>
              <li>
                <Link to="/admin-notice">Admin Notice</Link>
              </li>
              <li>
                <Link to="/notice-list">Notice List</Link>
              </li>
              <li>
              <Link to="/all-petitions">All Petitions</Link>
            </li>
            <li>
              <Link to="/all-complaints">All Complaints</Link>
            </li>
            <li>
              <Link to="/user-complaint">Submit Complaint</Link> 
            </li>
            <li>
              <Link to="/user-petition">Submit Petition</Link> 
            </li>
            </ul>
          </nav>
      {/* <AllComplaints complaints={complaints} /> Pass the complaints as a prop */}
      {/* Other admin dashboard components and functionality */}
    </div>
  );
};

export default AdminDashboard;
