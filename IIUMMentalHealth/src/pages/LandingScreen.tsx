import React from 'react';
import type { NavigationProps } from '../types'; // Adjust path as needed

const LandingScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="container center-content">
      <div className="circle-graphic">
        <h1 className="landing-title">
          IIUM<br />Mental<br />Health<br />Support
        </h1>
        <p className="landing-subtitle">Breathe. Understand. Grow.</p>
      </div>
      
      <button 
        onClick={() => onNavigate('Login')} 
        className="nav-button-text"
      >
        Go to Login
      </button>
    </div>
  );
};

export default LandingScreen;