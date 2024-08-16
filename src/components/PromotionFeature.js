import React, { useState, useEffect } from 'react';
import promo1 from '../assets/banner.png';
import promo2 from '../assets/banner1.png';
import promo3 from '../assets/banner2.png';

const promotions = [
  {  image: promo1 },
  {  image: promo2 },
  {  image: promo3 },
];

const FeaturedGame = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prevPromo) => (prevPromo + 1) % promotions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { image } = promotions[currentPromo];

  return (
    <section style={{ marginBottom: '30px', maxWidth: '450px', margin: '0 auto', boxShadow: '0 2px 10px var(--shadow-color)' }}>
      <div style={{
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px var(--shadow-color)',
        position: 'relative',
        backgroundColor: 'var(--surface-color)',
      }}>
        <div style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--on-primary-color)',
          fontSize: '1.5rem',
          fontWeight: 700,
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.7)',
        }}>
        </div>
       
      </div>
    </section>
  );
};

export default FeaturedGame;
