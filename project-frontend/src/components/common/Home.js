import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import Communication from '../appUser/Communication'; // Import CommunicationPage component

const Home = () => {
  // Sample images for the carousel
  const carouselImages = [
    'https://images.unsplash.com/photo-1591197172062-c718f82aba20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1673240845271-7595f3eb1c42?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  // Inline styles
  const containerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const carouselStyle = {
    maxWidth: '800px',
    margin: 'auto',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '20px',
    fontSize: '18px',
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to City Administration System</h1>

      {/* Carousel */}
      <div style={carouselStyle}>
        <Carousel>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`carousel-${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Link to Communication Page */}
      <Link to="/comm" style={linkStyle}>
        Go to Communication Page
      </Link>
    </div>
  );
};

export default Home;
