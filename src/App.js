import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeaturedStream from './components/PromotionFeature';
import Categories from './components/Categories';
import LiveStreams from './components/TopGame';
import BottomNav from './components/BottomNav';
import TrendingGames from './components/TrendingGames';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import CasinoGames from './components/CasinoGames';
import Promotions from './components/Promotions';
import Achievements from './components/Achievements';
import DailySpin from './components/DailySpin';
import Login from './components/Login';
import Register from './components/Register';
import VIP from './components/VIPMembership';
import GiftPage from './components/GiftPage';
import Sports from './components/Sports';
import Casino from './components/Casino';
import Slots from './components/Slots';
import FishingGaming from './components/FishingGaming';
import Lottery from './components/Lottery';
import Cockfight from './components/Cockfight';
import CrashGame from './components/CrashGame';
import Poker from './components/Poker';
import Arcade  from './components/Arcade';
import Keno  from './components/Keno';
import ESport  from './components/ESport';
import ComractUs from './components/ContactUs';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''} style={{
        maxWidth: '480px',
        margin: '0 auto',
        boxShadow: '0 0 20px var(--shadow-color)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'var(--surface-color)',
        color: 'var(--on-surface-color)',
        transition: 'background-color 0.3s, color 0.3s',
      }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/casino-games" element={<CasinoGames />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/daily-spin" element={<DailySpin />} />
            <Route
              path="/"
              element={
                <>
                  <FeaturedStream />
                  <Categories />
                  <TrendingGames />
                  <LiveStreams />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vip-membership" element={<VIP />} />
            <Route path="/gift" element={<GiftPage />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/fishing-gaming" element={<FishingGaming />} />
            <Route path="/cockfight" element={<Cockfight />} />
            <Route path="/crash-game" element={<CrashGame />} />
            <Route path="/arcade" element={<Arcade />} />
            <Route path="/keno" element={<Keno />} />
            <Route path="/poker" element={<Poker />} />
            <Route path="/lottery" element={<Lottery />} />
            <Route path="/e-sport" element={<ESport />} />
            <Route path="/contact-us" element={<ComractUs />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
