import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Notice = ({ message }) => {
  return (
    <div style={{
      backgroundColor: 'var(--primary-color)',
      color: 'var(--on-primary-color)',
      padding: '5px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px var(--shadow-color)',
      margin: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden', // Prevent overflow
      whiteSpace: 'nowrap', // Prevent text from wrapping
    }}>
      <FontAwesomeIcon icon={faBullhorn} style={{ marginRight: '10px', fontSize: '1.5rem', flexShrink: 0 }} />
      <div style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'scroll-left 10s linear infinite', // Apply scrolling animation
      }}>
        <p style={{ 
          margin: 0, 
          fontWeight: 'bold', 
          fontSize: '1rem', 
          display: 'inline', 
        }}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notice;
