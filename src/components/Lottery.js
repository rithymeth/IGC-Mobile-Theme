import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import megaJackpotImage from '../assets/1.png';
import dailyDrawImage from '../assets/1.png';
import powerballImage from '../assets/1.png';
import scratchCardsImage from '../assets/1.png';
import euroMillionsImage from '../assets/1.png';
import thunderballImage from '../assets/1.png';

const lotteryGames = [
  { name: 'Mega Jackpot', image: megaJackpotImage, description: 'Play for a chance to win our biggest jackpot ever! Draws every Saturday.' },
  { name: 'Daily Draw', image: dailyDrawImage, description: 'Try your luck every day with our daily lottery draw.' },
  { name: 'Powerball', image: powerballImage, description: 'Join millions in this multi-state lottery with massive jackpots.' },
  { name: 'Scratch Cards', image: scratchCardsImage, description: 'Instant win games with various themes and prizes.' },
  { name: 'EuroMillions', image: euroMillionsImage, description: "Participate in Europe's biggest lottery with life-changing prizes." },
  { name: 'Thunderball', image: thunderballImage, description: 'Better odds of winning with still impressive jackpots.' },
];

const Lottery = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Lottery</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Try your luck and see if you can hit the jackpot in our lottery games. Choose your numbers and wait for the draw!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {lotteryGames.map((game, index) => (
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

export default Lottery;