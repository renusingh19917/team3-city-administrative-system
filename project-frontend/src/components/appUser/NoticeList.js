// NoticeList.js

import React from 'react';

function NoticeList({ notices }) {
    return (
      <div>
        <h2>Notice List</h2>
        <ul>
          {notices.map((notice, index) => (
            <li key={index}>
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }



export default NoticeList;

