import React from 'react';
import type { NavigationProps } from '../types';

const SignUpScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="container">
      <div className="header-container" style={{ marginTop: '60px' }}>
        <h2 className="header-title">Sign Up to Continue</h2>
      </div>

      <div className="form-container">
        <input type="text" className="input-field" placeholder="Full Name" />
        <br />
        <input type="text" className="input-field" placeholder="Matric Number" />
        <br />
        <input type="email" className="input-field" placeholder="Student Email (@iium.edu.my)" />
        <br />
        <input type="tel" className="input-field" placeholder="Phone number" />
        <br />
        <input type="password" className="input-field" placeholder="Password" />

        <button className="primary-button" style={{ marginTop: '40px' }} onClick={() => onNavigate('Home')}>
          Sign Up
        </button>
        
        <div className="footer-text">
          Already have an account?{' '}
          <span className="link-text" onClick={() => onNavigate('Login')}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;