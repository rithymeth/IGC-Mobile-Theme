import React from 'react';

const ESport = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px' }}>E-Sport</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Dive into the world of competitive gaming and place your bets on your favorite teams. Experience the thrill of e-sports!
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="CS:GO" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>CS:GO</h3>
        </div>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="League of Legends" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>League of Legends</h3>
        </div>
        {/* Add more games here */}
      </div>
    </div>
  );
};

export default ESport;
