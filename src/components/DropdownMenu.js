import React from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'My Profile', path: '/my-profile' },
    { name: 'VIP', path: '/vip-membership' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Achievements & Badges', path: '/achievements' },
    { name: 'Daily Spin', path: '/daily-spin' },
    { name: 'Gift', path: '/gift' },  // Added Gift route
    { name: 'Log Out', path: '/' }, // Assuming logout redirects to home or login page
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); // Close the dropdown menu after navigating
  };

  return (
    <div style={{
      position: 'fixed',
      top: '65px',
      left: 0,
      right: 0,
      maxWidth: '450px',
      margin: '0 auto',
      backgroundColor: 'var(--surface-color)',
      boxShadow: '0 4px 20px var(--shadow-color)',
      zIndex: 1001,
      borderRadius: '0 0 10px 10px',
      overflow: 'hidden',
    }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            style={{
              padding: '15px 20px',
              borderBottom: '1px solid var(--background-color)',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontWeight: 600,
              backgroundColor: index === 0 ? 'var(--primary-color)' : 'transparent',
              color: index === 0 ? 'var(--on-primary-color)' : 'inherit',
            }}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;