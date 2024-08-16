import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDice, FaTable, FaTrophy, FaFutbol, FaFish, FaGamepad, FaCocktail, FaBomb, FaChessKnight, FaTicketAlt, FaDesktop, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: 'Sports', icon: <FaFutbol size={28} />, path: '/sports' },
  { name: 'Casino', icon: <FaTable size={28} />, path: '/casino' },
  { name: 'Slots', icon: <FaDice size={28} />, path: '/slots' },
  { name: 'Fishing Gaming', icon: <FaFish size={28} />, path: '/fishing-gaming' },
  { name: 'Cockfight', icon: <FaCocktail size={28} />, path: '/cockfight' },
  { name: 'Crash Game', icon: <FaBomb size={28} />, path: '/crash-game' },
  { name: 'Arcade', icon: <FaGamepad size={28} />, path: '/arcade' },
  { name: 'Keno', icon: <FaTicketAlt size={28} />, path: '/keno' },
  { name: 'Poker', icon: <FaChessKnight size={28} />, path: '/poker' },
  { name: 'Lottery', icon: <FaTrophy size={28} />, path: '/lottery' },
  { name: 'E-Sport', icon: <FaDesktop size={28} />, path: '/e-sport' },
];

const Categories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section style={{ 
      padding: '20px', 
      maxWidth: '450px', 
      margin: '0 auto', 
      backgroundColor: 'var(--surface-color)', 
      borderRadius: '8px', 
      boxShadow: '0 2px 5px var(--shadow-color)',
      position: 'relative'
    }}>
      <h2 style={{ color: '#E63946', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Game Categories
      </h2>
      <div 
        ref={containerRef}
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          paddingBottom: '10px', 
          gap: '15px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {categories.map((category, index) => (
          <Link to={category.path} key={index} style={{ textDecoration: 'none' }}>
            <div
              style={{
                flex: '0 0 auto',
                backgroundColor: '#2a2a2a',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                minWidth: '120px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ marginBottom: '10px', color: '#E63946' }}>
                {category.icon}
              </div>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '500' }}>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button 
          onClick={() => scroll('left')} 
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          <FaChevronLeft />
        </button>
      )}
      {scrollPosition < containerRef.current?.scrollWidth - containerRef.current?.clientWidth && (
        <button 
          onClick={() => scroll('right')} 
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default Categories;