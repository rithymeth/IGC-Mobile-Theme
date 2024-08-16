import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
// import SearchBar from './SearchBar';
import ProfileImage from '../assets/1.png'; // Ensure you have an actual profile image path
import Logo from '../assets/logo.png';
import BalanceDisplay from './BalanceDisplay';


const Header = ({ darkMode, setDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const currentBalance = 0.00;
  return (
    <header style={{
      backgroundColor: 'var(--surface-color)',
      color: 'var(--on-surface-color)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      maxWidth: '480px',
      margin: '0 auto',
      boxShadow: '0 4px 20px var(--shadow-color)',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
      }}>

        <div onClick={toggleDropdown} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>☰</div>
        <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-color)' }}>
          <img src={Logo} alt='Icg Logo' width='120px' />
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <span onClick={() => setDarkMode(!darkMode)} style={{ marginRight: '15px', fontSize: '1.2rem', cursor: 'pointer' }}>
            {darkMode ? '🌙' : '☀️'}
          </span>
          {/* <span onClick={toggleSearch} style={{ marginRight: '15px', fontSize: '1.2rem', cursor: 'pointer' }}>🔍</span> */}
          <BalanceDisplay balance={currentBalance} />
          <img
            src={ProfileImage}
            alt="User Avatar"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '2px solid var(--primary-color)',
              cursor: 'pointer',
            }}
            onClick={toggleDropdown} // Opens dropdown on click
          />
          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              backgroundColor: 'var(--surface-color)',
              boxShadow: '0 4px 20px var(--shadow-color)',
              borderRadius: '8px',
              overflow: 'hidden',
              zIndex: 1000,
            }}>
              <DropdownMenu onClose={toggleDropdown} />
            </div>
          )}
        </div>
      </div>
      {/* {isSearchOpen && <SearchBar />} */}
    </header>
  );
};

export default Header;
