import React, { useState } from 'react';
import slotImage from '../assets/1.png';
import casinoImage from '../assets/2.png';
import crashGameImage from '../assets/3.png';
import fishingGameImage from '../assets/1.png';
const CasinoGames = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const games = [
    { name: 'Slots', image: slotImage, type: 'Slots', description: 'Spin to win!' },
    { name: 'Roulette', image: casinoImage, type: 'Table Games', description: 'Bet on your lucky number.' },
    { name: 'Blackjack', image: crashGameImage, type: 'Card Games', description: 'Get as close to 21 as possible.' },
    { name: 'Poker', image: fishingGameImage, type: 'Card Games', description: 'Bluff your way to victory.' },
  ];

  const filteredGames = games.filter(game => 
    (filter === 'All' || game.type === filter) &&
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ padding: '20px', maxWidth: '450px', margin: '0 auto', backgroundColor: 'var(--surface-color)', borderRadius: '12px', boxShadow: '0 4px 15px var(--shadow-color)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: 'var(--primary-color)', textAlign: 'center' }}>Casino Games</h2>
      
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', borderRadius: '25px', border: '1px solid var(--background-color)', width: '80%', marginBottom: '10px' }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        {['All', 'Slots', 'Table Games', 'Card Games'].map(category => (
          <button 
            key={category}
            onClick={() => setFilter(category)}
            style={{
              marginRight: '10px',
              padding: '10px 20px',
              borderRadius: '25px',
              border: filter === category ? '2px solid var(--primary-color)' : '2px solid var(--background-color)',
              backgroundColor: filter === category ? 'var(--primary-color)' : 'transparent',
              color: filter === category ? 'var(--on-primary-color)' : 'var(--on-surface-color)',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', color: 'var(--on-surface-color)' }}>
        {filteredGames.map((game, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: '#2a2a2a', 
              borderRadius: '8px', 
              textAlign: 'center', 
              width: '100px', 
              position: 'relative', 
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={game.image} alt={game.name} style={{ width: '100%', borderRadius: '8px', height: '80px', objectFit: 'cover' }} />
            <div style={{ marginTop: '5px', color: '#ffffff', fontWeight: 600 }}>{game.name}</div>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              opacity: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '10px',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
            >
              {game.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasinoGames;
