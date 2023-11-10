
// NoticeList.js
import React, { useEffect, useState ,Link} from 'react';
import { getAllNotices } from '../../services/AdminCommunicationService';
import { useNavigate } from 'react-router';


function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getAllNotices()
      .then((response) => {
        setNotices(response.data); // Update the state with fetched notices
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
                 {/* <Link to={`notice-details/${notice.id}`}><p>{notice.title}</p></Link> */}
                <h3>{notice.title}</h3>
                {/* <p>{notice.content}</p>
                <p>{notice.issuedOn}</p> */}
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

