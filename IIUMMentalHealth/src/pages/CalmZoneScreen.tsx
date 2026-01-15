import React from 'react';
import type { NavigationProps } from '../types';
import { 
  Wind, 
  MoonStar, 
  BookOpen, 
  Mountain, 
  UserRound, 
  CalendarDays
} from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';

const CalmZoneScreen: React.FC<NavigationProps> = ({ onNavigate }) => {

  const tools = [
    { id: 'breathing', title: 'Breathing Exercise', icon: <Wind size={48} strokeWidth={1.5} /> },
    { id: 'zikir', title: 'Zikir / Nasheed', icon: <MoonStar size={48} strokeWidth={1.5} /> },
    { id: 'todo', title: 'To-do List', icon: <BookOpen size={48} strokeWidth={1.5} /> },
    { id: 'nature', title: 'Nature Sound', icon: <Mountain size={48} strokeWidth={1.5} /> },
    { id: 'reminder', title: 'Islamic Reminder', icon: <UserRound size={48} strokeWidth={1.5} /> }, 
    { id: 'counselling', title: 'Counselling session', icon: <CalendarDays size={48} strokeWidth={1.5} /> },
  ];

  return (
    <div className="container" style={{ paddingBottom: '120px', backgroundColor: 'white' }}>
      
      {/* --- Header --- */}
      <div className="header-container center-content" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h2 className="header-title" style={{ fontSize: '20px', fontWeight: '700' }}>
          Al-Sakinah : Calm Zone
        </h2>
      </div>

      {/* --- Tools Grid (The Partitioning) --- */}
      <div className="calm-grid-container">
        {tools.map((tool) => (
          <button 
            key={tool.id} 
            className="calm-tool-card"
            onClick={() => {
              if (tool.id === 'breathing') onNavigate('Breathing');
              if (tool.id === 'zikir') onNavigate('NasheedPlayer');
              if (tool.id === 'reminder') onNavigate('IslamicReminders');
              if (tool.id === 'nature') onNavigate('NatureAmbience');
              if (tool.id === 'counselling') onNavigate('CounselingBooking');
              if (tool.id === 'todo') onNavigate('TodoList');
            }}
          >
            <div className="tool-icon">{tool.icon}</div>
            <span className="tool-title">{tool.title}</span>
          </button>
        ))}
      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default CalmZoneScreen;