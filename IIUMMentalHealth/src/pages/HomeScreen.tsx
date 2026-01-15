import React from 'react';
import type { NavigationProps } from '../types';
import BottomNavBar from '../components/BottomNavBar';

const HomeScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  
  // Data for the week's mood (Hardcoded for demo)
  const weekDays = [
    { day: 'Mon', mood: '😁', color: '#8BC34A' },
    { day: 'Tue', mood: '🙂', color: '#66BB6A' },
    { day: 'Wed', mood: '😔', color: '#26A69A' },
    { day: 'Thur', mood: '😟', color: '#546E7A' },
    { day: 'Fri', mood: '😫', color: '#8D6E63' },
    { day: 'Sat', mood: '😁', color: '#D4E157' },
    { day: 'Sun', mood: '🙂', color: '#66BB6A' },
  ];

  const appointments = [
    { id: 1, name: 'Dr. Anya', time: 'Oct 26, 4:00 PM' },
    { id: 2, name: 'Dr. Amira', time: 'Oct 26, 4:00 PM' },
    { id: 3, name: 'Dr. Alia', time: 'Oct 26, 4:00 PM' },
  ];

  return (
    <div className="container" style={{ paddingBottom: '100px', position: 'relative' }}>
      
      {/* --- Mood Tracker Section --- */}
      <div className="mood-section">
        {weekDays.map((item, index) => (
          <div key={index} className="day-container">
            <div className="mood-circle" style={{ backgroundColor: item.color }}>
              <span role="img" aria-label="mood">{item.mood}</span>
            </div>
            <span className="day-text">{item.day}</span>
          </div>
        ))}
      </div>

      {/* --- Quote Card Section --- */}
      <div 
        className="quote-card" 
        onClick={() => onNavigate('IslamicReminders')}
        style={{ cursor: 'pointer' }}
      >
        <p className="quote-text">
          Physically and mentally tired, but I still believe that,
        </p>
        <p className="arabic-text">فَإِنَّ مَعَ الْعُسْرِ يُسْرًا</p>
        <p className="translation-text">"Fa inna ma'al usri yusraa"</p>
        <p className="quote-text" style={{ marginTop: '10px' }}>
          In every hardships, there is a relief.
        </p>
      </div>

      {/* --- Counseling Booking Section --- */}
      <div className="booking-card">
        <h3 className="booking-title">Counseling booking</h3>
        
        {appointments.map((appt) => (
          <div key={appt.id} className="appointment-row">
            <div className="doctor-info">
              <div className="avatar-placeholder">👩‍⚕️</div>
              <div>
                <div className="doctor-name">{appt.name}</div>
                <div className="doctor-time">{appt.time}</div>
              </div>
            </div>
            <button 
              className="reschedule-button"
              onClick={() => onNavigate('CounselingBooking')}
            >
              Reschedule
            </button>
          </div>
        ))}

        <button 
          className="primary-button" 
          style={{ marginTop: '10px' }}
          onClick={() => onNavigate('CounselingBooking')}
        >
          Book New Session
        </button>
      </div>

      {/* --- Bottom Navigation Bar --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="Home" />

    </div>
  );
};

export default HomeScreen;
