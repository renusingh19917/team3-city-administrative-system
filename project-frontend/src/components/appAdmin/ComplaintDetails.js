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
    </div>
  );
};

export default ComplaintDetails;

