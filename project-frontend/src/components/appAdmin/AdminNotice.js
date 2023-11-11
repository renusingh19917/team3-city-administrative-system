import React, { useState } from 'react';
import { addNotice } from '../../services/AdminCommunicationService';
import '../../styles/AdminNotice.css';


function AdminNotice({ onAddNotice }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [issuedOn, setIssuedOn] = useState('');

  const handleAddNotice = () => {
    
   addNotice(title,content,issuedOn)
  }
  

  return (
        <div className='notice-box'>
          <h2>Add a Notice</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>{
              console.log("event",e)
              setTitle(e.target.value)
            } }
          />
<br></br><br></br>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
<br></br><br></br>
         <input
            type="text"
            placeholder="Issued on"
            value={issuedOn}
            onChange={(e) =>{
              console.log("event",e)
              setIssuedOn(e.target.value)
            } }
          />
<br></br><br></br>
          <button onClick={handleAddNotice}>Add Notice</button>
        </div>
      );
}

export default AdminNotice;








// // AdminNotice.js

// import React, { useState } from 'react';

// function AdminNotice({ onAddNotice }) {

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleAddNotice = () => {
//     onAddNotice({ title, content });
//     setTitle('');
//     setContent('');
//   }

//   return (
//     <div>
//       <h2>Add a Notice</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button onClick={handleAddNotice}>Add Notice</button>
//     </div>
//   );
// }

// export default AdminNotice;


