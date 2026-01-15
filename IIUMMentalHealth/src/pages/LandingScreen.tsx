import React from 'react';
import type { NavigationProps } from '../types'; // Adjust path as needed

const LandingScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="container center-content">
      <div 
        className="circle-graphic" 
        onClick={() => onNavigate('Login')}
        style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
      >
        <h1 className="landing-title">
          IIUM<br />Mental<br />Health<br />Support
        </h1>
        <p className="landing-subtitle">Breathe. Understand. Grow.</p>
      </div>
      
      {/* Removed "Go to Login" text as requested, circle is now effective button */}
    </div>
  );
};

export default LandingScreen;