// ComplaintDetails.js

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// const ComplaintDetails = ({ complaints, updateStatus }) => {
const ComplaintDetails = ({complaints}) => {
  const { id } = useParams();
  const complaint = complaints[id];

// const [complaint, setComplaint] = useState({});

//   const [status, setStatus] = useState(complaint.status);

//   const handleStatusChange = () => {
//     updateStatus(id, status);
//   };

  return (
    <div>
        <h3>{complaint.title}</h3>
        <p>{complaint.content}</p>
      {/* <h2>Complaint Details</h2>
      <p>Subject: {complaint.subject}</p>
      <p>Message: {complaint.message}</p>
      <p>Status: {complaint.status}</p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="under-review">Under Review</option>
        <option value="solved">Solved</option>
        <option value="closed">Closed</option>
      </select>
      <button onClick={handleStatusChange}>Update Status</button>
      <Link to="/all-complaints">Back to All Complaints</Link> */}
    </div>
  );
};

export default ComplaintDetails;


// const ComplaintDetails = ({ complaints, updateStatus }) => {
//   const { id } = useParams();
//   const complaint = complaints[id];

//   const [status, setStatus] = useState(complaint.status);

//   const handleStatusChange = () => {
//     updateStatus(id, status);
//   };

//   return (
//     <div>
//       <h2>Complaint Details</h2>
//       <p>Subject: {complaint.subject}</p>
//       <p>Message: {complaint.message}</p>
//       <p>Status: {complaint.status}</p>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="under-review">Under Review</option>
//         <option value="solved">Solved</option>
//         <option value="closed">Closed</option>
//       </select>
//       <button onClick={handleStatusChange}>Update Status</button>
//       <Link to="/all-complaints">Back to All Complaints</Link>
//     </div>
//   );
// };
