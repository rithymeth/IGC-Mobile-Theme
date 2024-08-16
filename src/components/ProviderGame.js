import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Provider from '../assets/icg-gaming-1.png';
import Provider2 from '../assets/fc.png';
import Provider1 from '../assets/royal.png';
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

const ProviderGame = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef(null);

  const providers = [
    { id: 1, name: 'Provider 1', image: Provider, link: '/provider1' },
    { id: 2, name: 'Provider 2', image: Provider1, link: '/provider2' },
    { id: 3, name: 'Provider 3', image: Provider2, link: '/provider3' },
    { id: 4, name: 'Provider 4', image: Provider, link: '/provider4' },
    { id: 6, name: 'Provider 6', image: Provider2, link: '/provider6' },
    { id: 5, name: 'Provider 5', image: Provider1, link: '/provider5' },
    // Add more providers as needed
  ];

  const handleProviderClick = (link) => {
    navigate(link);
  };

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#1a1a1a',
      borderRadius: '10px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{
        color: '#E63946',
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
      }}>Game Providers</h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        position: 'relative',
      }}>
        <FaSearch style={{
          position: 'absolute',
          left: '10px',
          color: '#888',
        }} />
        <input
          type="text"
          placeholder="Search providers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 10px 10px 40px',
            fontSize: '16px',
            backgroundColor: '#2a2a2a',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        />
      </div>

      <div style={{ position: 'relative' }}>
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            gap: '20px',
            padding: '10px 0',
          }}
        >
          {filteredProviders.map(provider => (
            <div
              key={provider.id}
              onClick={() => handleProviderClick(provider.link)}
              style={{
                flex: '0 0 auto',
                width: '150px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <img
                src={provider.image}
                alt={provider.name}
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProviderGame;