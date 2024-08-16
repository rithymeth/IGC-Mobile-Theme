import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'; // Updated icon import
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PromoCard = () => {
  return (
    <div style={{
      backgroundColor: '#007BFF',  // Blue background
      color: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      textAlign: 'center',
      position: 'relative',
    }}>
      <FontAwesomeIcon icon={faGift} style={{ fontSize: '2rem', color: 'yellow', marginBottom: '10px' }} />
      <p style={{ fontSize: '1rem', marginBottom: '40px' }}>
        ICG GAMING | Whitelabel and Software Solutions for online casinos and bookmakers websites. Payment Management, Win/Loss Report, Marketing Tools and many more!
      </p>
      <a href="/read-more" style={{
        backgroundColor: '#FFA500', // Orange background for the button
        color: 'white',
        padding: '10px 20px',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ marginRight: '8px' }}>Read More</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default PromoCard;
