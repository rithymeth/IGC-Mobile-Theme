import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import classicSlotsImage from '../assets/1.png';
import videoSlotsImage from '../assets/1.png';
import progressiveSlotsImage from '../assets/1.png';
import fruitSlotsImage from '../assets/1.png';
import megawaysSlotsImage from '../assets/1.png';
import jackpotSlotsImage from '../assets/1.png';

const slotGames = [
  { name: 'Classic Slots', image: classicSlotsImage, description: 'Experience the nostalgia of traditional 3-reel slot machines.' },
  { name: 'Video Slots', image: videoSlotsImage, description: 'Enjoy modern slots with exciting themes and bonus features.' },
  { name: 'Progressive Slots', image: progressiveSlotsImage, description: 'Play for a chance to win life-changing progressive jackpots.' },
  { name: 'Fruit Slots', image: fruitSlotsImage, description: 'Spin classic fruit symbols in these fun and colorful games.' },
  { name: 'Megaways Slots', image: megawaysSlotsImage, description: 'Experience slots with thousands of ways to win on every spin.' },
  { name: 'Jackpot Slots', image: jackpotSlotsImage, description: 'Aim for big wins with our selection of jackpot slot games.' },
];

const Slots = () => {
  const [hoveredSlot, setHoveredSlot] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Slots</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Spin the reels and win big with our exciting collection of slot games. Enjoy classic and video slots with amazing bonuses!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {slotGames.map((game, index) => (
          <div 
            key={index}
            style={{
              width: 'calc(50% - 10px)', // 50% width minus half of the gap
              maxWidth: '500px',
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              transform: hoveredSlot === index ? 'translateY(-5px)' : 'translateY(0)',
              boxShadow: hoveredSlot === index ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={() => setHoveredSlot(index)}
            onMouseLeave={() => setHoveredSlot(null)}
          >
            <div style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
              <img 
                src={game.image} 
                alt={game.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: hoveredSlot === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#E63946', marginTop: 0, marginBottom: '10px', fontSize: '1rem', textAlign:'center' }}>{game.name}</h3>
              {/* <button 
                style={{
                  backgroundColor: '#E63946',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontWeight: 'bold',
                  width: '100%',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c62a36'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#E63946'}
              >
                Spin Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slots;