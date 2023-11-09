// ComplaintList.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllComplaints = ({ complaints }) => {

    complaints = complaints || [];
  return (
    <div>
      <h2>All Complaints</h2>
      <ul>
        {complaints.map((complaint, index) => (
          <li key={index}>
            {/* <p>{complaint.title}</p> */}
            <Link to={`/complaint/${index}`}>{complaint.title}</Link>
            {/* <p>Subject: {complaint.subject}</p> */}
            {/* <p>{complaint.title}</p> */}
            {/* <p>{complaint.content}</p> */}
            {/* <p>Status: {complaint.status}</p> */}
            {/* Additional complaint details */}
          </li>
        ))}
      </ul>
    </div>
  );
};


// function NoticeList({ notices }) {
//     return (
//       <div>
//         <h2>Notice List</h2>
//         <ul>
//           {notices.map((notice, index) => (
//             <li key={index}>
//               <h3>{notice.title}</h3>
//               <p>{notice.content}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
export default AllComplaints;
