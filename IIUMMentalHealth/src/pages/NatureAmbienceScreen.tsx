import React from 'react';
import { ChevronLeft, Bird, Waves, CloudRain, Trees } from 'lucide-react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const NatureAmbianceScreen: React.FC<NavigationProps> = ({ onNavigate }) => {

  const tracks = [
    { id: 'birds', label: 'Birds Chirping', icon: 'bird', style: 'btn-white' },
    { id: 'waterfall', label: 'Waterfall', icon: 'waterfall', style: 'btn-silver' },
    { id: 'rain', label: 'Rain', icon: 'rain', style: 'btn-silver' },
    { id: 'forest', label: 'Forest', icon: 'tree', style: 'btn-silver' },
  ];

  const renderIcon = (type: string) => {
    const iconProps = { size: 35, color: "#8E24AA" };
    switch (type) {
      case 'bird':
        return <Bird {...iconProps} />;
      case 'waterfall':
        return <Waves {...iconProps} />;
      case 'rain':
        return <CloudRain {...iconProps} />;
      case 'tree':
        return <Trees {...iconProps} />;
      default:
        return null;
    }
  };

  const [activeTracks, setActiveTracks] = React.useState<string[]>([]);

  const toggleTrack = (id: string) => {
    setActiveTracks(prev => 
      prev.includes(id) 
        ? prev.filter(trackId => trackId !== id) 
        : [...prev, id]
    );
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
        {tracks.map((track) => {
          const isActive = activeTracks.includes(track.id);
          return (
            <button 
              key={track.id} 
              className={`nature-option-btn ${track.style}`}
              style={{
                flexDirection: 'column',
                gap: '8px',
                border: isActive ? '3px solid #8E24AA' : 'none',
                backgroundColor: isActive ? '#E1BEE7' : undefined,
                transform: isActive ? 'scale(0.95)' : undefined
              }}
              onClick={() => toggleTrack(track.id)}
            >
              {renderIcon(track.icon)}
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#555' }}>
                {track.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default NatureAmbianceScreen;