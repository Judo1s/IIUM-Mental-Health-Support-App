import React from 'react';
import { Home, Flower2, MessageCircle, Smile, User } from 'lucide-react';
import type { ScreenName } from '../types';

interface BottomNavBarProps {
  onNavigate: (screen: ScreenName) => void;
  activeTab: 'Home' | 'CalmZone' | 'DailyMoodCheckIn' | 'Profile' | 'CounselingBooking' | 'RahmahChatbox';
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, activeTab }) => {
  return (
    <div className="nav-bar-docked">
      <button 
        className={`nav-item-docked ${activeTab === 'Home' ? 'active-docked' : ''}`} 
        onClick={() => onNavigate('Home')}
      >
        <Home size={28} />
      </button>
      
      <button 
        className={`nav-item-docked ${activeTab === 'CalmZone' ? 'active-docked' : ''}`}
        onClick={() => onNavigate('CalmZone')}
      >
        <Flower2 size={28} />
      </button>
      
      {/* Floating Center Button Wrapper */}
      <div className="center-docked-wrapper">
         <div className="center-curve-bg"></div>
         <button className="center-docked-button" onClick={() => onNavigate('RahmahChatbox')}>
           <MessageCircle size={32} color="white" />
         </button>
      </div>

      <button 
        className={`nav-item-docked ${activeTab === 'DailyMoodCheckIn' ? 'active-docked' : ''}`}
        onClick={() => onNavigate('DailyMoodCheckIn')}
      >
        <Smile size={28} />
      </button>
      
      <button 
        className={`nav-item-docked ${activeTab === 'Profile' ? 'active-docked' : ''}`}
        onClick={() => onNavigate('Profile')}
      >
        <User size={28} />
      </button>
    </div>
  );
};

export default BottomNavBar;
