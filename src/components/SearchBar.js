import React from 'react';

const SearchBar = () => {
  return (
    <div style={{ padding: '0 20px 15px' }}>
      <input
        type="text"
        placeholder="Search streams, games, or creators"
        style={{
          width: '90%',
          padding: '10px 15px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: 'var(--background-color)',
          color: 'var(--on-surface-color)',
          fontSize: '0.9rem',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      />
    </div>
  );
};

export default SearchBar;