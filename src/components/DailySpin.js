import React, { useState } from 'react';

const rewards = [
  '10 Free Spins',
  '50% Deposit Bonus',
  '5,000 Coins',
  '1,000 Coins',
  'Mystery Prize',
  'No Reward'
];

const DailySpin = () => {
  const [spinning, setSpinning] = useState(false);
  const [reward, setReward] = useState(null);

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      setTimeout(() => {
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        setReward(randomReward);
        setSpinning(false);
      }, 3000);
    }
  };

  return (
    <section style={{ padding: '20px', maxWidth: '450px', margin: '0 auto', backgroundColor: 'var(--on-surface-color)', borderRadius: '12px', boxShadow: '0 4px 15px var(--shadow-color)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: 'var(--primary-color)', textAlign: 'center' }}>Daily Spin</h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '200px',
          height: '200px',
          margin: '0 auto',
          borderRadius: '50%',
          border: '5px solid var(--primary-color)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem',
          color: 'var(--primary-color)',
          transition: 'transform 3s ease',
          transform: spinning ? 'rotate(1080deg)' : 'rotate(0deg)',
        }}>
          {reward ? reward : 'Spin to Win!'}
        </div>
        <button
          onClick={spinWheel}
          disabled={spinning}
          style={{
            marginTop: '20px',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--on-primary-color)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 2px 10px var(--shadow-color)',
          }}
        >
          {spinning ? 'Spinning...' : 'Spin Now'}
        </button>
      </div>
    </section>
  );
};

export default DailySpin;
