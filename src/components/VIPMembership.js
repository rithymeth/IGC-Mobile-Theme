import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCrown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const tiers = [
  { name: 'VIP 1', benefits: ['Exclusive Bonuses', 'Priority Support'], progress: 10, color: '#FFD700' },
  { name: 'VIP 2', benefits: ['Higher Limits', 'VIP Events'], progress: 20, color: '#C0C0C0' },
  { name: 'VIP 3', benefits: ['Faster Withdrawals', 'Personal Account Manager'], progress: 30, color: '#CD7F32' },
  { name: 'VIP 4', benefits: ['Special Promotions', 'Dedicated Support'], progress: 40, color: '#50C878' },
  { name: 'VIP 5', benefits: ['Custom Offers', 'VIP Lounge Access'], progress: 50, color: '#4169E1' },
  { name: 'VIP 6', benefits: ['Personalized Rewards', 'Exclusive Invitations'], progress: 60, color: '#8A2BE2' },
  { name: 'VIP 7', benefits: ['Luxury Gifts', 'Holiday Packages'], progress: 70, color: '#FF69B4' },
  { name: 'VIP 8', benefits: ['Private Events', 'Luxury Concierge'], progress: 80, color: '#FF4500' },
  { name: 'VIP 9', benefits: ['Personal VIP Host', 'Luxury Car Service'], progress: 90, color: '#1E90FF' },
  { name: 'VIP 10', benefits: ['Private Jet Service', 'Ultimate VIP Experience'], progress: 100, color: '#FF1493' },
];

const VIPMembership = () => {
  return (
    <section style={{
      marginTop: '30px',
      padding: '20px',
      backgroundColor: 'var(--surface-color)',
      borderRadius: '15px',
      boxShadow: '0 4px 20px var(--shadow-color)',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: '700', 
        marginBottom: '25px', 
        color: 'var(--primary-color)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <FontAwesomeIcon icon={faCrown} style={{ marginRight: '10px', color: '#FFD700' }} />
        VIP Membership
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tiers.map((tier, index) => (
          <div key={index} style={{
            backgroundColor: 'var(--background-color)',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 style={{ color: tier.color, fontWeight: '700', fontSize: '1.3rem', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faStar} style={{ marginRight: '8px' }} />
                {tier.name}
              </h3>
              <FontAwesomeIcon icon={faChevronRight} style={{ color: 'var(--primary-color)' }} />
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '15px' }}>
              {tier.benefits.map((benefit, i) => (
                <li key={i} style={{ color: 'var(--on-surface-color)', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: tier.color, marginRight: '10px' }}></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div style={{
              backgroundColor: 'var(--surface-color)',
              borderRadius: '10px',
              height: '10px',
              overflow: 'hidden',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
            }}>
              <div style={{
                width: `${tier.progress}%`,
                height: '100%',
                backgroundColor: tier.color,
                transition: 'width 0.5s ease',
              }}></div>
            </div>
            <p style={{ textAlign: 'right', marginTop: '5px', fontSize: '0.9rem', color: 'var(--secondary-color)' }}>
              {tier.progress}% Complete
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VIPMembership;