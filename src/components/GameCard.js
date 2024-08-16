import React from 'react';

const GameCard = ({ name, viewers, image }) => {
  return (
    <div style={{
      minWidth: '140px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px var(--shadow-color)',
      transition: 'transform 0.2s',
    }}>
      <div style={{
        height: '100px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '1.1rem',
      }}>
        {name}
      </div>
      <div style={{ padding: '15px', textAlign: 'center', backgroundColor: 'var(--surface-color)' }}>
        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary-color)' }}>{viewers} Playing</p>
        <button style={{
          marginTop: '10px',
          backgroundColor: 'var(--primary-color)',
          color: 'var(--on-primary-color)',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'transform 0.2s, background-color 0.3s',
        }}
        onClick={() => console.log('Play Now')}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >Play Now</button>
      </div>
    </div>
  );
};

export default GameCard;
