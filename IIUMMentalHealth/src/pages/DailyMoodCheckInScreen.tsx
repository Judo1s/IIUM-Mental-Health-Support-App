import React, { useState } from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const DailyMoodCheckInScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  // Get current date details
  const today = new Date();
  const dateString = today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const timeString = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const moods = [
    { id: 'rad', label: 'rad', emoji: '😁', color: '#CDDC39' }, // Lime
    { id: 'good', label: 'good', emoji: '🙂', color: '#66BB6A' }, // Green
    { id: 'meh', label: 'meh', emoji: '😐', color: '#26A69A' }, // Teal
    { id: 'bad', label: 'bad', emoji: '😟', color: '#546E7A' }, // Blue Grey
    { id: 'awful', label: 'awful', emoji: '😫', color: '#8D6E63' }, // Brown
  ];

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      
      {/* --- Header with Close Button --- */}
      <div className="mood-header">
        <button className="close-button" onClick={() => onNavigate('Home')}>✕</button>
        <h2 className="header-title" style={{ fontSize: '18px', fontWeight: '600' }}>
          Daily Mood Check In
        </h2>
        <div style={{ width: '24px' }}></div> {/* Spacer for center alignment */}
      </div>

      {/* --- Main Question Section --- */}
      <div className="mood-content center-content">
        <h1 className="mood-question">How are you?</h1>
        
        {/* Date & Time Row */}
        <div className="datetime-row">
          <div className="datetime-item">
            <span style={{ marginRight: '5px' }}>📅</span>
            {dateString}
          </div>
          <div className="datetime-item">
            <span style={{ marginRight: '5px' }}>🕒</span>
            {timeString}
          </div>
        </div>

        {/* --- Mood Selection Grid --- */}
        <div className="mood-selection-row">
          {moods.map((m) => (
           <button 
              key={m.id}
              className={`mood-item-btn ${selectedMood === m.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedMood(m.id);
                // Add specific delay or navigate immediately
                setTimeout(() => onNavigate('MoodDetails'), 300);
              }}
            >
              <div 
                className="mood-icon-circle" 
                style={{ backgroundColor: m.color }}
              >
                <span className="mood-emoji-large">{m.emoji}</span>
              </div>
              <span className="mood-label-text" style={{ color: selectedMood === m.id ? m.color : 'inherit' }}>
                {m.label}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="DailyMoodCheckIn" />

    </div>
  );
};

export default DailyMoodCheckInScreen;