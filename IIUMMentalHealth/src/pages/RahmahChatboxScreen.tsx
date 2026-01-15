import React from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';
import { MessageSquare } from 'lucide-react';

const RahmahChatboxScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      
      {/* --- Header --- */}
      <div className="header-container center-content" style={{ marginTop: '40px', marginBottom: '20px' }}>
        <h2 className="header-title" style={{ fontSize: '20px', fontWeight: '700' }}>
          Rahmah Chatbox
        </h2>
      </div>

      {/* --- Chat Layout --- */}
      <div className="chat-interface-container">
        
        {/* Helper Bot Bubble */}
        <div className="chat-bubble bot-bubble">
          <p className="chat-text">How are you feeling today?</p>
          <div className="bubble-tail-left"></div>
        </div>

        {/* User Bubble */}
        <div className="chat-bubble user-bubble">
           <p className="chat-text white-text">
             Im quite overwhelmed from my quiz today
           </p>
           <div className="bubble-tail-right"></div>
        </div>

        {/* Input Area (Mockup) */}
        <div className="chat-input-wrapper">
          <div className="chat-input-fake">
            <MessageSquare size={20} color="white" style={{ marginRight: '10px' }} />
            <span style={{ fontWeight: 600 }}>Lets Talk!</span>
          </div>
        </div>

      </div>

      {/* --- Bottom Navigation --- */}
      {/* We can highlight 'CounselingBooking' or just leave none active if it's a special overlay? 
          The mockup shows the center button seemingly active/pressed or just present. 
          Let's assume the center button IS the entry content.
          But the center button in nav bar is usually for 'Chat'.
      */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CounselingBooking" /> 
      {/* Note: In BottomNavBar, we might need a specific 'Chat' active state if we want the button to look active.
          For now reusing "CounselingBooking" or maybe adding a new literal to the component prop.
      */}

    </div>
  );
};

export default RahmahChatboxScreen;
