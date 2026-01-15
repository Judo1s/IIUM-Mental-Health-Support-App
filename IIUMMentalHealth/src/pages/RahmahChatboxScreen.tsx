import React, { useState, useRef, useEffect } from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const RahmahChatboxScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "How are you feeling today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newUserMsg: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');

    // Simulate Bot Response
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: "I hear you. Thank you for sharing. Would you like to talk more about it?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="container" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      {/* --- Header --- */}
      <div className="header-container center-content" style={{ marginTop: '20px', marginBottom: '20px', flexShrink: 0 }}>
        <h2 className="header-title" style={{ fontSize: '20px', fontWeight: '700' }}>
          Rahmah Chatbox
        </h2>
      </div>

      {/* --- Chat Layout --- */}
      <div className="chat-interface-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Messages List */}
        <div className="messages-list" style={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px 20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble ${msg.sender === 'bot' ? 'bot-bubble' : 'user-bubble'}`}>
              <p className={`chat-text ${msg.sender === 'user' ? 'white-text' : ''}`}>
                {msg.text}
              </p>
              {msg.sender === 'bot' && <div className="bubble-tail-left"></div>}
              {msg.sender === 'user' && <div className="bubble-tail-right"></div>}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input-wrapper" style={{ padding: '20px' }}>
          <div className="chat-input-fake" style={{ paddingRight: '5px' }}> {/* Reusing container style but modifying content */}
            <MessageSquare size={20} color="white" style={{ marginRight: '10px' }} />
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Lets Talk!" 
              style={{ 
                flex: 1, 
                border: 'none', 
                background: 'transparent', 
                color: 'white', 
                outline: 'none',
                fontWeight: 600,
                fontSize: '16px'
              }}
            />
            <button 
              onClick={handleSend}
              style={{ background: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginLeft: '10px', marginRight: '8px' }}
            >
              <Send size={16} color="#8E24AA" />
            </button>
          </div>
        </div>

      </div>

      {/* --- Bottom Navigation --- */}
      <div style={{ flexShrink: 0 }}>
        <BottomNavBar onNavigate={onNavigate} activeTab="RahmahChatbox" /> 
      </div>

    </div>
  );
};

export default RahmahChatboxScreen;
