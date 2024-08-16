import React, { useState } from 'react';

// Assume these image imports are correct for your project structure
import csgoImage from '../assets/1.png';
import leagueOfLegendsImage from '../assets/1.png';
import dota2Image from '../assets/1.png';
import overwatchImage from '../assets/1.png';
import valorantImage from '../assets/1.png';
import rocketLeagueImage from '../assets/1.png';

const esportGames = [
  { name: 'CS:GO', image: csgoImage, description: 'Bet on professional Counter-Strike: Global Offensive matches and tournaments.' },
  { name: 'League of Legends', image: leagueOfLegendsImage, description: 'Place your bets on LoL championships and regional leagues worldwide.' },
  { name: 'Dota 2', image: dota2Image, description: 'Participate in betting for The International and other major Dota 2 events.' },
  { name: 'Overwatch', image: overwatchImage, description: 'Bet on Overwatch League matches and other competitive Overwatch tournaments.' },
  { name: 'Valorant', image: valorantImage, description: 'Get involved in the fast-growing Valorant esports betting scene.' },
  { name: 'Rocket League', image: rocketLeagueImage, description: 'Bet on exciting car soccer matches in professional Rocket League tournaments.' },
];

const ESport = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1f1f1f', 
      minHeight: '100vh', 
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#E63946', textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>E-Sport</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Dive into the world of competitive gaming and place your bets on your favorite teams. Experience the thrill of e-sports!
      </p>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {esportGames.map((game, index) => (
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
                Place Bet
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ESport;