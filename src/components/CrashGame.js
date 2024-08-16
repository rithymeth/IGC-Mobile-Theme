import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import highStakesCrashImage from '../assets/1.png';
import classicCrashImage from '../assets/1.png';
import turboChargeCrashImage from '../assets/1.png';
import multiPlayerCrashImage from '../assets/1.png';
import cryptoCrashImage from '../assets/1.png';
import spaceCrashImage from '../assets/1.png';

const crashGames = [
  { name: 'High Stakes Crash', image: highStakesCrashImage, description: 'Push your luck to the limit with high risk, high reward gameplay.' },
  { name: 'Classic Crash', image: classicCrashImage, description: 'Experience the original crash game that started it all.' },
  { name: 'Turbo Charge Crash', image: turboChargeCrashImage, description: 'Fast-paced action with quick rounds and rapid payouts.' },
  { name: 'Multiplayer Crash', image: multiPlayerCrashImage, description: 'Compete against other players in real-time crash events.' },
  { name: 'Crypto Crash', image: cryptoCrashImage, description: 'Play with your favorite cryptocurrencies in this digital crash game.' },
  { name: 'Space Crash', image: spaceCrashImage, description: 'Take your crash game to the stars with this space-themed version.' },
];

const CrashGame = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Crash Game</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Take a risk in our crash games. How high will you go before it all comes crashing down? Test your nerves and win big!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {crashGames.map((game, index) => (
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
              <h3 style={{ color: '#E63946', marginTop: 0, marginBottom: '10px', fontSize: '1.4rem' }}>{game.name}</h3>
              <button 
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
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrashGame;