import React from 'react';
import { Quote, ChevronLeft } from 'lucide-react';
import type { NavigationProps } from '../types';

const IslamicRemindersScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  
  const quotes = [
    {
      id: 1,
      text: '"And He provides for him from sources he could never imagine."',
      reference: '— [Quran 65:3]',
      isFeatured: true,
    },
    {
      id: 2,
      text: '"Do not lose hope, nor be sad."',
      reference: '— [Quran 3:139]',
      isFeatured: false,
    },
    {
      id: 3,
      text: '"He knows what is in every heart."',
      reference: '— [Quran 67:13]',
      isFeatured: false,
    },
    {
      id: 4,
      text: '"Indeed, with hardship [will be] ease."',
      reference: '— [Quran 94:6]',
      isFeatured: false,
    },
  ];

  return (
    <div className="container nasheed-theme" style={{ paddingBottom: '100px' }}>
      
      {/* --- Header with Back Button --- */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
        <button 
          onClick={() => onNavigate('CalmZone')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '15px' }}
        >
          <ChevronLeft size={28} color="#333" />
        </button>
        <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Islamic Reminders</h2>
      </div>

      {/* --- Reminders Grid --- */}
      <div className="reminders-grid">
        {quotes.map((quote) => (
          <div 
            key={quote.id} 
            className={`reminder-card ${quote.isFeatured ? 'featured' : ''}`}
          >
            <p className="reminder-text">{quote.text}</p>
            <span className="reminder-ref">{quote.reference}</span>
          </div>
        ))}
      </div>

      {/* --- Bottom Navigation --- */}
      <div className="nav-bar">
        <button className="nav-item" onClick={() => onNavigate('Home')}>🏠</button>
        
        {/* Active state to show we are in the Calm Zone section */}
        <button className="nav-item active-nav" onClick={() => onNavigate('CalmZone')}>🧘‍♀️</button>
        
        <div className="center-nav-wrapper">
          <button className="center-nav-button">💬</button>
        </div>

        <button className="nav-item">😊</button>
        <button className="nav-item" onClick={() => onNavigate('Profile')}>👤</button>
      </div>

    </div>
  );
};

export default IslamicRemindersScreen;