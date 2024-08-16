import React from 'react';
import { FaPlay, FaFire } from 'react-icons/fa';
import slotImage from '../assets/afb.png';
import casinoImage from '../assets/afb2.jpg';
import crashGameImage from '../assets/dg99.jpg';
import fishingGameImage from '../assets/sexy.jpg';

const games = [
  { name: 'AFB Casino', image: slotImage, players: 1200 },
  { name: 'AFB Sports', image: casinoImage, players: 980 },
  { name: 'DG Casino', image: crashGameImage, players: 1500 },
  { name: 'Sexy Casino', image: fishingGameImage, players: 850 },
  // Add more games as needed
];

const TrendingGames = () => {
  return (
    <section className="animate-fade-in" style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        fontWeight: 700, 
        marginBottom: '20px', 
        color: 'var(--primary-color)', 
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <FaFire style={{ marginRight: '10px', color: '#FF6B6B' }} />
        Trending Games
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '20px', 
        padding: '10px 0'
      }}>
        {games.map((game, index) => (
          <div key={index} style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px var(--shadow-color)',
            transition: 'all 0.3s',
            backgroundColor: 'var(--surface-color)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 6px 20px var(--shadow-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px var(--shadow-color)';
          }}
          >
            <div style={{
              height: '120px',
              backgroundImage: `url(${game.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
              }}>
                <FaFire style={{ marginRight: '5px', color: '#FF6B6B' }} />
                {game.players}
              </div>
            </div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 700, 
                marginBottom: '15px', 
                color: 'var(--on-surface-color)',
                textAlign: 'center'
              }}>{game.name}</h3>
              <button style={{
                width: '100%',
                backgroundColor: 'var(--primary-color)',
                color: 'var(--on-primary-color)',
                border: 'none',
                padding: '10px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s, transform 0.2s',
              }}
              onClick={() => console.log('Play Now:', game.name)}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaPlay style={{ marginRight: '5px' }} /> Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;