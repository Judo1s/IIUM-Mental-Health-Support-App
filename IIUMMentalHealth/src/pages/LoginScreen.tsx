import React, { useState } from 'react';
import type { NavigationProps } from '../types';

const LoginScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="header-container">
        <h2 className="header-title">
          Welcome to<br />IIUM Mental<br />Health Support
        </h2>
        <p className="header-subtitle">
          Welcome to a space just for you. Shall we begin?
        </p>
      </div>

      <div className="form-container">
        <label className="label">Email</label>
        <input 
          type="email" 
          className="input-field" 
          placeholder="Enter your email" 
        />

        <label className="label">Password</label>
        <div className="password-container">
          <input 
            type={showPassword ? "text" : "password"} 
            className="password-input" 
            placeholder="Enter password" 
          />
          <span 
            className="eye-icon" 
            onClick={() => setShowPassword(!showPassword)}
            role="button"
            tabIndex={0}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <a href="#" className="forgot-pass-text">Forgot Password?</a>

        <button className="primary-button" onClick={() => onNavigate('Home')}>Sign In</button>

        <div className="or-text">Or continue with</div>

        <div className="social-grid">
          <button className="social-button">✉️ Email</button>
          <button className="social-button">🍎 iOS</button>
          <button className="social-button">🎓 IIUM ID</button>
          <button className="social-button"> Google</button>
        </div>
      </div>

      <div className="footer-text">
        Don't have an account?{' '}
        <span className="link-text" onClick={() => onNavigate('SignUp')}>
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default LoginScreen;