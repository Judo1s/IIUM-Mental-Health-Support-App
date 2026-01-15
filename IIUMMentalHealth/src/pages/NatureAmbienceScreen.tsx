import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const NatureAmbianceScreen: React.FC<NavigationProps> = ({ onNavigate }) => {

  const tracks = [
    { id: 'visual', label: 'Visual Focus', icon: 'eye', style: 'btn-white' },
    { id: 'balance', label: 'Balance', icon: 'stones', style: 'btn-silver' },
    { id: 'serenity', label: 'Serenity', icon: 'butterfly', style: 'btn-silver' },
    { id: 'grounding', label: 'Grounding', icon: 'mountain', style: 'btn-silver' },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'eye':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#8E24AA">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        );
      case 'stones':
        return (
          <svg width="35" height="35" viewBox="0 0 24 24" fill="#8E24AA">
            <ellipse cx="12" cy="6" rx="6" ry="3" opacity="0.6"/>
            <ellipse cx="12" cy="12" rx="7" ry="3.5" opacity="0.8"/>
            <ellipse cx="12" cy="19" rx="8" ry="4" />
          </svg>
        );
      case 'butterfly':
        return (
          <svg width="35" height="35" viewBox="0 0 24 24" fill="#8E24AA">
             <path d="M12 12c0-3 2.5-5 5-5s5 2 5 5c0 2.5-2 4-5 4h-5v-4zm0 0c0-3-2.5-5-5-5S2 9 2 12c0 2.5 2 4 5 4h5v-4z"/>
            <path d="M12 12c0 3 2 5 4.5 5s4.5-2 4.5-5h-9zm0 0c0 3-2 5-4.5 5S3 15 3 12h9z" opacity="0.7"/>
          </svg>
        );
      case 'mountain':
        return (
           <svg width="35" height="35" viewBox="0 0 24 24" fill="#8E24AA">
            <path d="M14 6l-3.8 5.4L14 18l6-9-6-3z" opacity="0.7"/>
            <path d="M10 8L2 20h18l-8-12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="nature-container">
      
      {/* --- Header --- */}
      <div className="nature-header">
        <button 
          onClick={() => onNavigate('CalmZone')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <ChevronLeft size={28} color="#000" />
        </button>
        <span className="nature-header-title">Nature Sounds</span>
      </div>

      {/* --- Main Purple Card --- */}
      <div className="nature-card-container">
        {tracks.map((track) => (
          <button 
            key={track.id} 
            className={`nature-option-btn ${track.style}`}
            onClick={() => console.log(`Playing ${track.label}`)}
          >
            {renderIcon(track.icon)}
          </button>
        ))}
      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default NatureAmbianceScreen;