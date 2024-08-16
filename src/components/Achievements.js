import React from 'react';

const achievements = [
  { name: 'High Roller', description: 'Wager over $10,000 in a week.', icon: '💰' },
  { name: 'Lucky Streak', description: 'Win 10 games in a row.', icon: '🎉' },
  { name: 'Early Bird', description: 'Log in before 6:00 AM.', icon: '🌅' },
  { name: 'Jackpot Winner', description: 'Hit the jackpot in any slot game.', icon: '🎰' },
];

const Achievements = () => {
  return (
    <section style={{ padding: '20px', maxWidth: '450px', margin: '0 auto', backgroundColor: 'var(--surface-color)', borderRadius: '12px', boxShadow: '0 4px 15px var(--shadow-color)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: 'var(--primary-color)', textAlign: 'center' }}>Achievements & Badges</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {achievements.map((achievement, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            backgroundColor: '#2a2a2a',
            borderRadius: '8px',
            padding: '10px 15px',
            boxShadow: '0 2px 10px var(--shadow-color)',
          }}>
            <span style={{ fontSize: '2rem', marginRight: '15px' }}>{achievement.icon}</span>
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '5px', color: 'var(--on-surface-color)' }}>{achievement.name}</p>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem' }}>{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
