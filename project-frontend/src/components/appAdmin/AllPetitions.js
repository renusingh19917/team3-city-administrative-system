

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllPetitions = ({ petitions }) => {

  petitions = petitions || [];
  return (
    <div>
      <h2>All petitions</h2>
      <ul>
        {petitions.map((petition, index) => (
          <li key={index}>
            <p>Petition</p>
            <Link to={`/petition/${index}`}>{petition.title}</Link>
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

export default AllPetitions;


// const BlogList = () => {
//     const [allBlogList, setAllBlogList] = useState([]);
    
//     useEffect(() => {
//         getAllBlogs()
//             .then((resp) => {
//                 console.log(resp.data);
//                 setAllBlogList(resp.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Blog List</h1>
//             <div className="list">
//                 {allBlogList.map((blog, k) => (
//                     <div className="blog-box" key={k}>
//                         <Link to={`/BlogDetails/${blog.id}`} className="blog-list">
//                             <p>{blog.title}</p>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
