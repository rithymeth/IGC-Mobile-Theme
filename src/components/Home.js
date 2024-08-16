// Home.js
import React from 'react';
import FeaturedStream from './PromotionFeature';
import Categories from './Categories';
import TrendingGames from './TrendingGames';
import LiveStreams from './TopGame';
import VideoFeature from './VideoFeature';
import ProviderGame from './ProviderGame';
import Notice from './Notice'; // Import the Notice component
import PromoCard from './PromoCard';
import { useNavigate } from 'react-router-dom'; // Corrected import for navigation

const Home = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the Register page
  };
  return (
    <div>
      <Notice message="🎉 Welcome to our platform! Check out the latest promotions and events." />
      <FeaturedStream />

      <div className="auth-buttons">
        <button onClick={handleLoginClick} className="auth-button login-button">
          Login
        </button>
        <button onClick={handleRegisterClick} className="auth-button register-button">
          Register
        </button>
      </div>
      <Categories />
      <TrendingGames />
      <LiveStreams />
      <VideoFeature />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',  // Full viewport height
      }}>
        <PromoCard />
      </div>
      <ProviderGame />
    </div>
  );
};

export default Home;
