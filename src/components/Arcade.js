import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import spaceInvadersImage from '../assets/1.png';
import pacManImage from '../assets/1.png';
import tetrisImage from '../assets/1.png';
import donkeyKongImage from '../assets/1.png';
import streetFighterImage from '../assets/1.png';
import pinballImage from '../assets/1.png';

const arcadeGames = [
  { name: 'Space Invaders', image: spaceInvadersImage, description: 'Defend Earth from alien invaders in this classic shoot ' },
  { name: 'Pac-Man', image: pacManImage, description: 'Navigate mazes and eat dots while avoiding ghosts in this iconic arcade game.' },
  { name: 'Tetris', image: tetrisImage, description: 'Arrange falling blocks to create complete lines in this addictive puzzle game.' },
  { name: 'Donkey Kong', image: donkeyKongImage, description: 'Help Mario rescue the princess from the barrel-throwing Donkey Kong.' },
  { name: 'Street Fighter', image: streetFighterImage, description: 'Engage in one-on-one combat with players from around the world.' },
  { name: 'Pinball', image: pinballImage, description: 'Test your reflexes and aim for high scores in various themed pinball machines.' },
];

const Arcade = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Arcade</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Enjoy a variety of fun and engaging arcade games. Relive the nostalgia of classic arcade gaming with exciting new twists.
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {arcadeGames.map((game, index) => (
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

export default Arcade;