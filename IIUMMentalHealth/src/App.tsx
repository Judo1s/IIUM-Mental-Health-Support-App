import React, { useState } from 'react';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import BreathingExerciseScreen from './pages/BreathingExerciseScreen';
import NasheedPlayerScreen from './pages/NasheedPlayerScreen';
import IslamicRemindersScreen from './pages/IslamicRemindersScreen';
import NatureAmbienceScreen from './pages/NatureAmbienceScreen';
import DailyMoodCheckInScreen from './pages/DailyMoodCheckInScreen';
import CounselingBookingScreen from './pages/CounselingBookingScreen';
import MoodDetailsScreen from './pages/MoodDetailsScreen';
import MoodHistoryScreen from './pages/MoodHistoryScreen';
import CalmZoneScreen from './pages/CalmZoneScreen';
import RahmahChatboxScreen from './pages/RahmahChatboxScreen';
import TodoListScreen from './pages/TodoListScreen';

import type { ScreenName } from './types';

import './index.css';
import './App.css';


const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Landing');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Landing':
        return <LandingScreen onNavigate={setCurrentScreen} />;
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'SignUp':
        return <SignUpScreen onNavigate={setCurrentScreen} />;
      case 'Home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'CalmZone':
        return <CalmZoneScreen onNavigate={setCurrentScreen} />;
      case 'MoodDetails':
        return <MoodDetailsScreen onNavigate={setCurrentScreen} />;
      case 'MoodHistory':
        return <MoodHistoryScreen onNavigate={setCurrentScreen} />;
      case 'CounselingBooking':
        return <CounselingBookingScreen onNavigate={setCurrentScreen} />;
      case 'Profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      default:
        return <LandingScreen onNavigate={setCurrentScreen} />;
      case 'Breathing':
        return <BreathingExerciseScreen onNavigate={setCurrentScreen} />;
      case 'NasheedPlayer':
        return <NasheedPlayerScreen onNavigate={setCurrentScreen} />;
      case 'IslamicReminders':
        return <IslamicRemindersScreen onNavigate={setCurrentScreen} />;
      case 'NatureAmbience':
        return <NatureAmbienceScreen onNavigate={setCurrentScreen} />;
      case 'DailyMoodCheckIn':
        return <DailyMoodCheckInScreen onNavigate={setCurrentScreen} />;
      case 'RahmahChatbox':
        return <RahmahChatboxScreen onNavigate={setCurrentScreen} />;
      case 'TodoList':
        return <TodoListScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
};

export default App;