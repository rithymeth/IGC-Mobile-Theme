import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const BalanceDisplay = ({ balance }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#333',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '25px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      marginLeft: '10px'
    }}>
      <FontAwesomeIcon icon={faCoins} style={{ marginRight: '8px', fontSize: '1.2rem', color: '#FFD700' }} />
      <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{balance.toFixed(2)}</span>
    </div>
  );
};

export default BalanceDisplay;
