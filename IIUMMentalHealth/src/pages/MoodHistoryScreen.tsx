import React from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';
import { ChevronLeft, ChevronRight, Frown, Meh, Smile } from 'lucide-react';

const MoodHistoryScreen: React.FC<NavigationProps> = ({ onNavigate }) => {

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Mock data for the dark calendar
  // 35 cells (5 rows x 7 cols)
  const calendarData = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Offset
    if (day <= 0 || day > 30) return { day: '', type: 'empty-slot' }; // Hidden/Spacer
    
    // Mock Pattern
    if ([1, 2, 7, 8, 12].includes(day)) return { day, type: 'mood', emoji: <Smile size={20} />, color: '#4ADE80' }; // Green
    if ([5, 6].includes(day)) return { day, type: 'mood', emoji: <Meh size={20} />, color: '#FACC15' }; // Yellow
    if ([3, 4, 9, 10, 11].includes(day)) return { day, type: 'mood', emoji: <Frown size={20} />, color: '#22D3EE' }; // Cyan/Blue
    
    // Empty Days
    return { day, type: 'add' };
  });

  return (
    <div className="container" style={{ paddingBottom: '100px', backgroundColor: 'white' }}>
      
      {/* --- Header --- */}
      <div className="history-header">
        <button className="circle-nav-btn"><ChevronLeft size={24} /></button>
        <h2 className="month-title-large">November 2025</h2>
        <button className="circle-nav-btn"><ChevronRight size={24} /></button>
      </div>

      {/* --- Purple Card Container --- */}
      <div className="purple-calendar-card">
        <h3 className="calendar-card-title-white">Calendar</h3>
        
        {/* Dark Grid Container */}
        <div className="dark-calendar-grid">
          
          {/* Days Header */}
          <div className="grid-header-row">
            {daysOfWeek.map(d => <span key={d} className="dark-day-header">{d}</span>)}
          </div>

          {/* Calendar Body */}
          <div className="grid-body">
            {calendarData.map((item, index) => (
              <div key={index} className="calendar-cell">
                
                {item.type === 'mood' && (
                  <div className="mood-circle" style={{ backgroundColor: item.color }}>
                     <span className="mood-icon-dark">{item.emoji}</span>
                  </div>
                )}
                
                {item.type === 'add' && (
                  <div className="add-circle">
                    <span className="plus-sign-dark">+</span>
                  </div>
                )}

                {/* Date Label (Only if not empty-slot) */}
                {item.type !== 'empty-slot' && (
                   <span className="date-label">{item.day}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Bottom Nav --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="DailyMoodCheckIn" />

    </div>
  );
};

export default MoodHistoryScreen;