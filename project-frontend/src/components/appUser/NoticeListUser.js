
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllNotices } from '../../services/AdminCommunicationService';


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
          <h2>Notice List</h2>
          <ul>
            {notices.map((notice, index) => (
              <li key={index}>
                 <Link to={`/notice-details/${notice.id}`}><p>{notice.title}</p></Link>
               </li>
            ))}
          </ul>
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

