import React, { useState } from 'react';
import type { NavigationProps } from '../types';
import { ChevronLeft, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';

const NasheedPlayerScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="nasheed-gradient-container">
      
      {/* --- Header --- */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px', position: 'relative' }}>
        {/* Back Button (Absolute to not disturb center title if possible, or flex) */}
        <button 
          onClick={() => onNavigate('CalmZone')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
        >
          <ChevronLeft size={28} color="white" />
        </button>
        
        {/* Centered Title */}
        <span className="nasheed-header-title" style={{ position: 'absolute', left: 0, right: 0, pointerEvents: 'none' }}>
          Nasheed Playlist
        </span>
      </div>

      {/* --- Album Art --- */}
      <div className="album-art-large">
        {/* Placeholder for Calligraphy */}
        {/* If user provided image, we would use <img> here. 
            For now, using a text representation or icon. */}
             <span className="album-art-placeholder">☪️</span>
      </div>

      {/* --- Song Info --- */}
      <div className="player-info-center">
        <div className="song-title-large">Ramadhan</div>
        <div className="artist-name-large">Maher Zain</div>
      </div>

      {/* --- Progress Bar --- */}
      <div className="player-progress-bar">
        <div className="player-progress-fill"></div>
      </div>

      {/* --- Controls --- */}
      <div className="player-controls-row">
        <button className="control-btn-white">
          <SkipBack size={32} fill="white" />
        </button>
        
        <button 
          className="control-btn-white" 
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className="play-pause-circle">
            {isPlaying ? 
              <Pause size={32} fill="#8E24AA" /> : 
              <Play size={32} fill="#8E24AA" style={{ marginLeft: '4px' }} />
            }
          </div>
        </button>
        
        <button className="control-btn-white">
          <SkipForward size={32} fill="white" />
        </button>
      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default NasheedPlayerScreen;