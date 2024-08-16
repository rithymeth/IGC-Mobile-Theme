import React, { useState } from 'react';
import PromoImage1 from '../assets/1.png';
import PromoImage2 from '../assets/1.png';

const Promotions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Special', 'Sport', 'Live Casino', 'Slots', 'Rebate', 'VIP'];

  const promotions = [
    { id: 1, title: '100% WELCOME BONUS', description: '100% Welcome Bonus', image: PromoImage1, category: 'Special', expiryDate: '2024-02-29' },
    { id: 2, title: '100% WELCOME BONUS', description: '100% Welcome Bonus', image: PromoImage1, category: 'Special', expiryDate: '2024-06-10' },
    { id: 3, title: 'Birthday Freebies', description: 'Birthday Freebies', image: PromoImage2, category: 'Special', expiryDate: '2023-11-24' },
  ];

  const filteredPromotions = selectedCategory === 'All' 
    ? promotions 
    : promotions.filter(promo => promo.category === selectedCategory);

  const styles = {
    section: {
      padding: '20px',
      backgroundColor: '#1e1e1e',
      color: 'white',
    },
    categoryTabs: {
      display: 'flex',
      overflowX: 'auto',
      marginBottom: '20px',
    },
    categoryTab: {
      padding: '10px 20px',
      backgroundColor: '#333',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
      borderRadius: '5px',
    },
    activeTab: {
      backgroundColor: '#555',
    },
    promotionList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    promotionCard: {
      backgroundColor: '#2a2a2a',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    promotionImage: {
      width: '100%',
      height: 'auto',
    },
    promotionInfo: {
      padding: '15px',
    },
    promotionTitle: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    promotionDescription: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    expiryDate: {
      fontSize: '12px',
      color: '#ffa500',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.categoryTabs}>
        {categories.map(category => (
          <button 
            key={category}
            style={{
              ...styles.categoryTab,
              ...(selectedCategory === category ? styles.activeTab : {})
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={styles.promotionList}>
        {filteredPromotions.map((promo) => (
          <div key={promo.id} style={styles.promotionCard}>
            <img src={promo.image} alt={promo.title} style={styles.promotionImage} />
            <div style={styles.promotionInfo}>
              <h3 style={styles.promotionTitle}>{promo.title}</h3>
              <p style={styles.promotionDescription}>{promo.description}</p>
              <span style={styles.expiryDate}>{promo.expiryDate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;