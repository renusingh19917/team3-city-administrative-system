
// AdminNotice.js

import React, { useState } from 'react';

function AdminNotice({ onAddNotice }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNotice = () => {
    onAddNotice({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <div>
      <h2>Add a Notice</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNotice}>Add Notice</button>
    </div>
  );
}

export default AdminNotice;


