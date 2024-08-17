import React from 'react';
import { useNavigate } from 'react-router-dom';
import Provider from '../assets/icg-gaming-1.png';
import Provider2 from '../assets/fc.png';
import Provider1 from '../assets/royal.png';

const ProviderGame = () => {
  const navigate = useNavigate();

  const providers = [
    { id: 1, name: 'Provider 1', image: Provider, link: '/provider1' },
    { id: 2, name: 'Provider 2', image: Provider1, link: '/provider2' },
    { id: 3, name: 'Provider 3', image: Provider2, link: '/provider3' },
    { id: 4, name: 'Provider 4', image: Provider, link: '/provider4' },
    { id: 5, name: 'Provider 5', image: Provider1, link: '/provider5' },
    { id: 6, name: 'Provider 6', image: Provider2, link: '/provider6' },
    { id: 7, name: 'Provider 7', image: Provider, link: '/provider7' },
    { id: 8, name: 'Provider 8', image: Provider1, link: '/provider8' },
  ];

  const handleProviderClick = (link) => {
    navigate(link);
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'var(--surface-color)',
      borderRadius: '15px',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        color: '#E63946',
        fontSize: '28px',
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
      }}>Game Providers</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '25px',
        justifyContent: 'center',
      }}>
        {providers.map(provider => (
          <div
            key={provider.id}
            onClick={() => handleProviderClick(provider.link)}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'var(--background-color)',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              paddingTop: '75%', // 4:3 aspect ratio
            }}>
              <img
                src={provider.image}
                alt={provider.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
            <div style={{
              padding: '15px',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              transform: 'translateY(100%)',
              transition: 'transform 0.3s ease',
            }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{provider.name}</h3>
            </div>
            <style>{`
              div:hover img {
                transform: scale(1.1);
              }
              div:hover div {
                transform: translateY(0);
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderGame;