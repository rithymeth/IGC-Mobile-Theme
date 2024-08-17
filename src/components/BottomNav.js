import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserCircle, FaTags, FaEnvelope } from 'react-icons/fa';

const BottomNav = () => {
  const navItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Profile', icon: <FaUserCircle />, path: '/my-profile' },
    { name: 'Promotion', icon: <FaTags />, path: '/promotions' },
    { name: 'ContactUs', icon: <FaEnvelope />, path: '/contact-us' },
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '5px 0', // Reduced padding
      backgroundColor: 'var(--surface-color)',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      maxWidth: '480px',
      margin: '0 auto',
      boxShadow: '0 -2px 10px var(--shadow-color)',
      borderTopLeftRadius: '15px', // Slightly reduced border radius
      borderTopRightRadius: '15px',
    }}>
      {navItems.map((item, index) => (
        <NavLink 
          key={index}
          to={item.path}
          exact
          activeClassName="active"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '10px', // Reduced font size
            color: 'var(--on-surface-color)',
            textDecoration: 'none',
            transition: 'color 0.3s ease-in-out',
            padding: '5px', // Reduced padding
            position: 'relative',
            flex: '1',
          }}
          activeStyle={{
            color: 'var(--primary-color)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '20px' }}>{item.icon}</div>
            <span style={{ marginTop: '2px' }}>{item.name}</span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-2px', // Moved up slightly
            left: '50%',
            transform: 'translateX(-50%)',
            width: '6px', // Reduced size
            height: '6px', // Reduced size
            borderRadius: '50%',
            backgroundColor: 'var(--primary-color)',
            opacity: '0',
            transition: 'opacity 0.3s ease-in-out',
          }}
          className="active-indicator"
          ></div>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;