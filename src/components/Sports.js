import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import footballImage from '../assets/1.png';
import basketballImage from '../assets/1.png';
import baseballImage from '../assets/1.png';
import iceHockeyImage from '../assets/1.png';
import golfImage from '../assets/1.png';
import tableTennisImage from '../assets/1.png';

const sportsData = [
  { name: 'Football', image: footballImage, description: 'Bet on major leagues and international matches.' },
  { name: 'Basketball', image: basketballImage, description: 'NBA, EuroLeague, and more basketball events.' },
  { name: 'Baseball', image: baseballImage, description: 'MLB and international baseball tournaments.' },
  { name: 'Ice Hockey', image: iceHockeyImage, description: 'NHL and world championship games.' },
  { name: 'Golf', image: golfImage, description: 'Major golf tournaments and player specials.' },
  { name: 'Table Tennis', image: tableTennisImage, description: 'International table tennis events and leagues.' },
];

const Sports = () => {
  const [hoveredSport, setHoveredSport] = useState(null);

  return (
    <div style={{ padding: '20px', backgroundColor: '#1f1f1f', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>Sports Betting</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
        Experience the thrill of sports betting with our wide range of options. From football to table tennis, we offer competitive odds and exciting live betting opportunities. Join now and put your sports knowledge to the test!
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {sportsData.map((sport, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: '#2a2a2a', 
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              transform: hoveredSport === index ? 'translateY(-5px)' : 'translateY(0)',
              boxShadow: hoveredSport === index ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredSport(index)}
            onMouseLeave={() => setHoveredSport(null)}
          >
            <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
              <img 
                src={sport.image} 
                alt={sport.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: hoveredSport === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#E63946', margin: '0 0 10px 0', fontSize: '1.4rem' }}>{sport.name}</h3>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.9rem', lineHeight: '1.4' }}>{sport.description}</p>
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
                Place Bet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;