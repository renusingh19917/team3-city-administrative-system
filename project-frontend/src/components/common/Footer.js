import React from 'react';

const Footer = () => {
  return (
    <div style={footerContainerStyle}>
      <div style={footerStyle}>
        <p style={pStyle}>&copy; 2023 City Administration System</p>
      </div>
    </div>
  );
};

const footerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '20vh', 
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginTop: 'auto', // Push the footer to the bottom
};

const pStyle = {
  color: 'white',
}

export default Footer;
