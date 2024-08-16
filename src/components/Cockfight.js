import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import deepSeaFishingImage from '../assets/1.png';
import riverFishingImage from '../assets/1.png';
import iceFishingImage from '../assets/1.png';
import tropicalFishingImage from '../assets/1.png';
import competitiveFishingImage from '../assets/1.png';
import fishingTournamentImage from '../assets/1.png';

const fishingGames = [
  { name: 'Deep Sea Fishing', image: deepSeaFishingImage, description: 'Dive into the depths and catch rare ocean fish for big rewards.' },
  { name: 'River Fishing', image: riverFishingImage, description: 'Enjoy peaceful river scenery while angling for freshwater prizes.' },
  { name: 'Ice Fishing', image: iceFishingImage, description: 'Brave the cold and fish through the ice for unique winter catches.' },
  { name: 'Tropical Fishing', image: tropicalFishingImage, description: 'Experience exotic fishing in vibrant coral reefs and lagoons.' },
  { name: 'Competitive Fishing', image: competitiveFishingImage, description: 'Test your skills against other anglers in fast-paced matches.' },
  { name: 'Fishing Tournament', image: fishingTournamentImage, description: 'Enter high-stakes tournaments for a chance at massive jackpots.' },
];

const FishingGaming = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Fishing Gaming</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Cast your line and reel in the rewards in our exciting fishing games. Catch the big one and win big!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>1
png     {fishingGames.map((game, index) => (
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
                Start Fishing
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishingGaming;