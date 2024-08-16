import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !phone || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate registration
    console.log('Registering...', { username, phone, password });

    // Reset error and redirect to the login page
    setError('');
    navigate('/login');
  };

  return (
    <section style={{ padding: '20px', maxWidth: '450px', margin: '0 auto', backgroundColor: 'var(--surface-color)', borderRadius: '12px', boxShadow: '0 4px 15px var(--shadow-color)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: 'var(--primary-color)', textAlign: 'center' }}>Register</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: 'var(--on-surface-color)' }}>Username</label>
          <input 
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid var(--background-color)' }}
            placeholder="Enter your username"
            aria-label="Enter your username"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', color: 'var(--on-surface-color)' }}>Phone</label>
          <input 
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid var(--background-color)' }}
            placeholder="Enter your phone number"
            aria-label="Enter your phone number"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: 'var(--on-surface-color)' }}>Password</label>
          <input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid var(--background-color)' }}
            placeholder="Enter your password"
            aria-label="Enter your password"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: 'var(--on-surface-color)' }}>Confirm Password</label>
          <input 
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid var(--background-color)' }}
            placeholder="Confirm your password"
            aria-label="Confirm your password"
          />
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--on-primary-color)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 2px 10px var(--shadow-color)',
            width: '100%',
          }}
        >
          Register
        </button>
      </form>
      <p style={{ marginTop: '20px', textAlign: 'center', color: 'var(--on-surface-color)' }}>
        Already have an account? <a href="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Login</a>
      </p>
    </section>
  );
};

export default Register;
