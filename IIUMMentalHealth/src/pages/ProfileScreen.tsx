import React, { useState } from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const ProfileScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      
      {/* --- Top Header --- */}
      <div className="profile-header">
        <button 
          className="logout-button" 
          onClick={() => onNavigate('Landing')}
        >
          Logout
        </button>
      </div>

      {/* --- User Info --- */}
      <div className="profile-info">
        <div className="profile-avatar">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h2 className="username-text">Username</h2>
      </div>

      {/* --- Mood Summary Chart --- */}
      <div className="mood-summary-card">
        <div className="chart-header">
          <span className="chart-title">Monthly mood summary</span>
          <span className="chart-average">Average <span style={{fontSize: '18px'}}>😐</span></span>
        </div>
        
        <div className="chart-area">
          {/* Y-Axis Icons */}
          <div className="chart-y-axis">
            <span>😁</span>
            <span>🙂</span>
            <span>😐</span>
            <span>😟</span>
            <span>😡</span>
          </div>

          {/* SVG Graph Line mimicking the design */}
          <div className="chart-graph">
             <svg viewBox="0 0 100 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
               {/* Gradient Definition */}
               <defs>
                 <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#A020F0" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#A020F0" stopOpacity="0" />
                 </linearGradient>
               </defs>
               {/* The Wavy Line */}
               <path 
                 d="M0,40 C10,35 20,45 30,30 C40,15 50,35 60,25 C70,15 80,20 90,10 L100,5" 
                 fill="none" 
                 stroke="#A020F0" 
                 strokeWidth="2" 
               />
               {/* The Fill below the line */}
               <path 
                 d="M0,40 C10,35 20,45 30,30 C40,15 50,35 60,25 C70,15 80,20 90,10 L100,5 L100,50 L0,50 Z" 
                 fill="url(#purpleGradient)" 
                 stroke="none"
               />
             </svg>
          </div>
        </div>
        
        <div className="chart-x-axis">
          <span>30 Days Ago</span>
          <span>Today</span>
        </div>
      </div>

      {/* --- Settings List --- */}
      <div className="settings-list">
        
        {/* Toggle Option */}
        <div className="settings-item">
          <div className="settings-label">
             <span>🔔 Notification</span>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notificationsEnabled} 
              onChange={() => setNotificationsEnabled(!notificationsEnabled)} 
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Link Option */}
        <div className="settings-item">
          <div className="settings-label">
            <span>Language</span>
          </div>
          <span className="chevron-right">›</span>
        </div>

        {/* Add Home Option */}
        <div className="settings-item">
          <div className="settings-label">
            <span>⊕ Add to homescreen</span>
          </div>
        </div>

      </div>

      {/* --- Bottom Navigation (Profile Active) --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="Profile" />

    </div>
  );
};

export default ProfileScreen;