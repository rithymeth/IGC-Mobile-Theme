import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import blackjackImage from '../assets/afb_casino.jpg';
import rouletteImage from '../assets/gd.jpg';
import pokerImage from '../assets/pplay.jpg';
import slotsImage from '../assets/dg99.jpg';
import baccaratImage from '../assets/wm.jpg';
import crapsImage from '../assets/sexy.jpg';

const casinoGames = [
  { name: 'AFB Casino', image: blackjackImage, description: 'Try your luck against the dealer in this classic card game.' },
  { name: 'GD Casino', image: rouletteImage, description: 'Place your bets and watch the wheel spin in this game of chance.' },
  { name: 'PPlay Casino', image: pokerImage, description: 'Test your skills in various poker games against other players.' },
  { name: 'DG99 Casino', image: slotsImage, description: 'Spin the reels and aim for big wins in our exciting slot machines.' },
  { name: 'WM Casino', image: baccaratImage, description: 'Bet on the banker, player, or tie in this popular card game.' },
  { name: 'Sexy Casino', image: crapsImage, description: 'Roll the dice and bet on the outcome in this thrilling table game.' },
];

const Casino = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Casino</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Explore a world of excitement with our selection of casino games. From classic table games to modern variations, we've got it all!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {casinoGames.map((game, index) => (
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

export default Casino;