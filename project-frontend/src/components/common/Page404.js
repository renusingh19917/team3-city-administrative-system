import React from 'react';

const Page404 = () => {
  return (
    <div style={errorStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might be under construction or does not exist.</p>
    </div>
  );
};

const errorStyle = {
  textAlign: 'center',
  padding: '50px',
  marginTop: '50px',
};

export default Page404;
