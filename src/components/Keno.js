import React from 'react';

const Keno = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px' }}>Keno</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Pick your numbers and see if you can win big in this classic lottery-style game. The more numbers you match, the bigger the prize!
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="Classic Keno" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>Classic Keno</h3>
        </div>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <img src="/path-to-game-image.jpg" alt="High Stakes Keno" style={{ width: '100%', borderRadius: '8px' }} />
          <h3 style={{ color: '#E63946', marginTop: '10px', textAlign: 'center' }}>High Stakes Keno</h3>
        </div>
        {/* Add more games here */}
      </div>
    </div>
  );
};

export default Keno;
