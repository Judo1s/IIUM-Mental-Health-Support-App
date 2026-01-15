import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const CounselingBookingScreen: React.FC<NavigationProps> = ({ onNavigate }) => {

  // Calendar Data Mockup
  const daysOfWeek = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31

  const counselors = [
    { id: 1, name: 'Mr Albert', image: '👨‍💼' }, // Using emoji as placeholder
    { id: 2, name: 'Dr Anne', image: '👩‍⚕️' },
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
        <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Counselling Session</h2>
      </div>

      {/* --- Calendar Card --- */}
      <div className="calendar-card">
        {/* Calendar Header */}
        <div className="calendar-header">
          <span className="month-title">Januari 2022</span>
          <div className="calendar-nav">
            <span className="nav-arrow">‹</span>
            <span className="nav-arrow">›</span>
          </div>
        </div>

        {/* Days Row */}
        <div className="calendar-grid days-row">
          {daysOfWeek.map((day) => (
            <span key={day} className="day-name">{day}</span>
          ))}
        </div>

        {/* Dates Grid */}
        <div className="calendar-grid dates-grid">
          {dates.map((date) => (
            <div 
              key={date} 
              className={`date-cell ${date === 1 ? 'active-date' : ''}`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* --- Counselor List --- */}
      <div className="counselor-list">
        {counselors.map((c) => (
          <button key={c.id} className="counselor-card">
            <div className="counselor-avatar-circle">
              {/* Replace with <img> tag if you have real assets */}
              <span style={{ fontSize: '24px' }}>{c.image}</span>
            </div>
            <span className="counselor-name">{c.name}</span>
          </button>
        ))}
      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CounselingBooking" />

    </div>
  );
};

export default CounselingBookingScreen;