import React, { useState } from 'react';

const UserPetition = ({ onSubmitPetition }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmitPetition({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Submit a Petition</h2>
      <input
        type="text"
        placeholder="Petition Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Petition Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Petition</button>
    </div>
  );
};

export default UserPetition;
