import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// const ComplaintDetails = ({ complaints, updateStatus }) => {
const PetitionDetails = ({petitions}) => {
  const { id } = useParams();
  const petition = petitions[id];

// const [complaint, setComplaint] = useState({});

//   const [status, setStatus] = useState(complaint.status);

//   const handleStatusChange = () => {
//     updateStatus(id, status);
//   };

  return (
    <div>
        <h3>{petition.title}</h3>
        <p>{petition.content}</p>
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

export default PetitionDetails;