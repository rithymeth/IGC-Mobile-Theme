import React from 'react';

const Poker = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px' }}>Poker</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Test your skills and strategies in various poker games. Whether you're a beginner or a pro, we've got a game for you.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Texas Hold'em" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Texas Hold'em</h3>
        </div>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Omaha Poker" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Omaha Poker</h3>
        </div>
        {/* Add more games here */}
      </div>
    </div>
  );
};

export default Poker;
