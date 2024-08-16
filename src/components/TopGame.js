import React, { useState } from 'react';
import slotImage from '../assets/GoRush.png';
import rouletteImage from '../assets/NekoFortune.jpg';
import blackjackImage from '../assets/manekiNeko.jpg';
import pokerImage from '../assets/FortuneTiger.jpg';
import { FaStar, FaPlay } from 'react-icons/fa'; // Import icons

const games = [
  { name: 'Go Rush', image: slotImage, rating: 4.5, players: 1200 },
  { name: 'Neko Fortune', image: rouletteImage, rating: 4.2, players: 800 },
  { name: 'Maneki Neko', image: blackjackImage, rating: 4.7, players: 950 },
  { name: 'Fortune Tiger', image: pokerImage, rating: 4.8, players: 1500 },
];

const TopGame = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredGames = selectedCategory === 'All' ? games : games.filter(game => game.name === selectedCategory);

  return (
    <section className="animate-fade-in" style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px', color: 'var(--primary-color)', textAlign: 'center' }}>Top Games</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '25px', overflowX: 'auto', padding: '5px 0' }}>
        {['All', 'Slots', 'Roulette', 'Blackjack', 'Poker'].map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '10px 15px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: category === selectedCategory ? 'var(--primary-color)' : 'var(--surface-color)',
              color: category === selectedCategory ? 'var(--on-primary-color)' : 'var(--on-surface-color)',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              whiteSpace: 'nowrap',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
        {filteredGames.map((game, index) => (
          <div key={index} style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px var(--shadow-color)',
            transition: 'transform 0.2s',
            backgroundColor: 'var(--surface-color)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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
                <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                {game.rating}
              </div>
            </div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px', color: 'var(--on-surface-color)' }}>{game.name}</h3>
              {/* <p style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>{game.players} players</p> */}
              {/* <button style={{
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
                transition: 'background-color 0.3s',
              }}
              onClick={() => console.log('Play Now:', game.name)}
              >
                <FaPlay style={{ marginRight: '5px' }} /> Play Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGame;