import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const GiftPage = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [claimedDays, setClaimedDays] = useState([]);

  useEffect(() => {
    // Load saved state from localStorage
    const savedDay = parseInt(localStorage.getItem('currentDay'), 10);
    const savedClaimedDays = JSON.parse(localStorage.getItem('claimedDays')) || [];
    if (savedDay) {
      setCurrentDay(savedDay);
    }
    setClaimedDays(savedClaimedDays);
  }, []);

  useEffect(() => {
    // Save state to localStorage
    localStorage.setItem('currentDay', currentDay);
    localStorage.setItem('claimedDays', JSON.stringify(claimedDays));
  }, [currentDay, claimedDays]);

  const handleClaimGift = () => {
    if (!claimedDays.includes(currentDay)) {
      setClaimedDays([...claimedDays, currentDay]);

      // Move to the next day if all 7 days are not yet claimed
      if (currentDay < 7) {
        setCurrentDay(currentDay + 1);
      }
    }
  };

  return (
    <div className="gift-page">
      <h1 className="title">Daily Gift</h1>
      <p className="description">Claim your daily gift! You are on day {currentDay} of 7.</p>
      <div className="gift-box">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={`gift-item ${claimedDays.includes(index + 1) ? 'claimed' : ''}`}
          >
            <FontAwesomeIcon icon={faGift} className="gift-icon" />
            <div className="gift-day">Day {index + 1}</div>
            {currentDay === index + 1 && !claimedDays.includes(currentDay) && (
              <button onClick={handleClaimGift} className="claim-button">
                Claim Gift
              </button>
            )}
            {claimedDays.includes(index + 1) && <p className="claimed-label">Claimed</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftPage;
