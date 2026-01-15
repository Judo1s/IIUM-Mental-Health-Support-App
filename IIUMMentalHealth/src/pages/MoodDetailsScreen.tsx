import React, { useState } from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';
import { 
  BedDouble, 
  Moon, 
  Frown, 
  Sunrise, 
  Smile, 
  PartyPopper, 
  HandHeart, 
  Palmtree, 
  Coffee, 
  BatteryLow, 
  HelpCircle, 
  Meh, 
  AlertCircle, 
  Flame, 
  Zap, 
  CloudRain, 
  Flower 
} from 'lucide-react';

const MoodDetailsScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [selectedSleep, setSelectedSleep] = useState<string | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  const sleepOptions = [
    { id: 'good', label: 'good sleep', icon: <BedDouble size={24} /> },
    { id: 'medium', label: 'medium sleep', icon: <Moon size={24} /> },
    { id: 'bad', label: 'bad sleep', icon: <Frown size={24} /> },
    { id: 'early', label: 'sleep early', icon: <Sunrise size={24} /> },
  ];

  const emotionOptions = [
    { id: 'happy', label: 'happy', icon: <Smile size={24} /> },
    { id: 'excited', label: 'excited', icon: <PartyPopper size={24} /> },
    { id: 'grateful', label: 'grateful', icon: <HandHeart size={24} /> },
    { id: 'relaxed', label: 'relaxed', icon: <Palmtree size={24} /> },
    { id: 'content', label: 'content', icon: <Coffee size={24} /> },
    { id: 'tired', label: 'tired', icon: <BatteryLow size={24} /> },
    { id: 'unsure', label: 'unsure', icon: <HelpCircle size={24} /> },
    { id: 'bored', label: 'bored', icon: <Meh size={24} /> },
    { id: 'anxious', label: 'anxious', icon: <AlertCircle size={24} /> },
    { id: 'angry', label: 'angry', icon: <Flame size={24} /> },
    { id: 'stressed', label: 'stressed', icon: <Zap size={24} /> },
    { id: 'sad', label: 'sad', icon: <CloudRain size={24} /> },
    { id: 'desperate', label: 'desperate', icon: <Flower size={24} /> },
  ];

  const toggleEmotion = (id: string) => {
    if (selectedEmotions.includes(id)) {
      setSelectedEmotions(selectedEmotions.filter(e => e !== id));
    } else {
      setSelectedEmotions([...selectedEmotions, id]);
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '100px', backgroundColor: 'white' }}>
      
      {/* --- Header --- */}
      <div className="details-header">
        <button className="back-btn" onClick={() => onNavigate('DailyMoodCheckIn')}>‹</button>
        {/* Save Button navigates to History */}
        <button className="save-btn" onClick={() => onNavigate('MoodHistory')}>
          <span className="check-icon">✓</span> Save
        </button>
      </div>

      <h2 className="section-title center-text" style={{ fontSize: '22px' }}>What have you been up to?</h2>

      {/* --- Sleep Section --- */}
      <div className="purple-card">
        <h3 className="card-label">Sleep</h3>
        <div className="options-grid-sleep">
          {sleepOptions.map((opt) => (
            <button 
              key={opt.id} 
              className={`option-btn ${selectedSleep === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedSleep(opt.id)}
            >
              <div className="icon-circle-white">{opt.icon}</div>
              <span className="option-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Emotions Section --- */}
      <div className="purple-card">
        <h3 className="card-label">Emotions</h3>
        <div className="options-grid-emotions">
          {emotionOptions.map((opt) => (
            <button 
              key={opt.id} 
              className={`option-btn ${selectedEmotions.includes(opt.id) ? 'active' : ''}`}
              onClick={() => toggleEmotion(opt.id)}
            >
              <div className="icon-circle-white">{opt.icon}</div>
              <span className="option-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Bottom Nav --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="DailyMoodCheckIn" />

      {/* Floating Chat Button Overlay if we want it to persist or be part of Nav 
          (It's part of BottomNavBar now)
      */}

    </div>
  );
};

export default MoodDetailsScreen;