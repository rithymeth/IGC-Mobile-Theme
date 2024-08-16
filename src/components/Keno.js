import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import classicKenoImage from '../assets/1.png';
import highStakesKenoImage from '../assets/1.png';
import powerKenoImage from '../assets/1.png';
import superKenoImage from '../assets/1.png';
import flashKenoImage from '../assets/1.png';
import multiCardKenoImage from '../assets/1.png';

const kenoGames = [
  { name: 'Classic Keno', image: classicKenoImage, description: 'Play the traditional Keno game with standard rules and payouts.' },
  { name: 'High Stakes Keno', image: highStakesKenoImage, description: 'Bet big for a chance to win massive jackpots in this high-risk version.' },
  { name: 'Power Keno', image: powerKenoImage, description: 'Get extra payouts for matching the last number drawn.' },
  { name: 'Super Keno', image: superKenoImage, description: 'Win even more with bonus multipliers on certain number combinations.' },
  { name: 'Flash Keno', image: flashKenoImage, description: 'Experience rapid-fire Keno rounds for quick and exciting gameplay.' },
  { name: 'Multi-Card Keno', image: multiCardKenoImage, description: 'Play multiple Keno cards simultaneously for increased winning chances.' },
];

const Keno = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Keno</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Pick your numbers and see if you can win big in this classic lottery-style game. The more numbers you match, the bigger the prize!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {kenoGames.map((game, index) => (
          <div 
            key={index}
            style={{
              width: 'calc(50% - 10px)', // 50% width minus half of the gap
              maxWidth: '500px',
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              transform: hoveredGame === index ? 'translateY(-5px)' : 'translateY(0)',
              boxShadow: hoveredGame === index ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={() => setHoveredGame(index)}
            onMouseLeave={() => setHoveredGame(null)}
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
                  transform: hoveredGame === index ? 'scale(1.1)' : 'scale(1)',
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
                Play Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keno;