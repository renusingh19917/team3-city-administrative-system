// UserComplaint.js

import React, { useState } from 'react';

const UserComplaint = ({ onSubmitComplaint }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmitComplaint({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Submit a Complaint</h2>
      <input
        type="text"
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Complaint Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
};

export default UserComplaint;
