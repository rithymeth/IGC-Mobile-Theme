import React from 'react';

const Casino = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px' }}>Casino</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Explore a world of excitement with our selection of casino games. From classic table games to modern variations, we've got it all!
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Blackjack" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Blackjack</h3>
        </div>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Roulette" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Roulette</h3>
        </div>
        {/* Add more games here */}
      </div>
    </div>
  );
};

export default Casino;
