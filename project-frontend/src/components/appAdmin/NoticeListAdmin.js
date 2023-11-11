
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllNotices } from '../../services/AdminCommunicationService';
import '../../styles/NoticeListAdmin.css';


function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getAllNotices()
      .then((response) => {
        setNotices(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching notices:', error);
      });
  }, []);
 

  return (
    <div>
    <h1>Notice List</h1>
    <div className='notice-list'>
      {notices.map((notice, index) => (
        <div className='notice-list-admin' key={index}>
          <Link to={`/notice-details/${notice.id}`} className="notice-link">
            <p>{notice.title}</p>
          </Link>
        </div>       
      ))}
    </div>  
  </div>
       
      );
}

export default NoticeList;






// // NoticeList.js

// import React, { useEffect, useState } from "react";
// import { getAllNotices } from '../../services/AdminCommunicationService';
// // import { getAllNotices } from '../../services/CommunicationService';

// function NoticeList({notices}) {

//   // const [notices, setNotices] = useState([]);
  
//   // const addNotice = (notice) => {
//   //   setNotices([...notices, notice]);
//   // };

  
// //   useEffect(() => {
// //     getAllNotices()
// //         .then((resp) => {
// //             console.log(resp.data);
// //             setNotices(resp.data);
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //         });
// // }, []);


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



// export default NoticeList;

