import React from 'react';

const FishingGaming = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px' }}>Fishing Gaming</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Cast your line and reel in the rewards in our exciting fishing games. Catch the big one and win big!
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Deep Sea Fishing" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Deep Sea Fishing</h3>
        </div>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="River Fishing" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>River Fishing</h3>
        </div>
        {/* Add more games here */}
      </div>
    </div>
  );
};

export default FishingGaming;
