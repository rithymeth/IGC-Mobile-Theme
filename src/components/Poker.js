import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import texasHoldemImage from '../assets/1.png';
import omahaPokerImage from '../assets/1.png';
import sevenCardStudImage from '../assets/1.png';
import caribbeanStudImage from '../assets/1.png';
import threeCardPokerImage from '../assets/1.png';
import videoPokerImage from '../assets/1.png';

const pokerGames = [
  { name: 'Texas Hold\'em', image: texasHoldemImage, description: 'The most popular poker variant. Play against others with community cards.' },
  { name: 'Omaha Poker', image: omahaPokerImage, description: 'Similar to Hold\'em, but with four hole cards and more possibilities.' },
  { name: 'Seven Card Stud', image: sevenCardStudImage, description: 'A classic poker game where players are dealt seven cards throughout the hand.' },
  { name: 'Caribbean Stud', image: caribbeanStudImage, description: 'Play against the house in this fast-paced poker variant with a progressive jackpot.' },
  { name: 'Three Card Poker', image: threeCardPokerImage, description: 'A quick and exciting poker game played with just three cards.' },
  { name: 'Video Poker', image: videoPokerImage, description: 'Play poker against a machine with various game modes and payouts.' },
];

const Poker = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Poker</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Test your skills and strategies in various poker games. Whether you're a beginner or a pro, we've got a game for you.
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {pokerGames.map((game, index) => (
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

export default Poker;