export type ScreenName = 
  | 'Landing' 
  | 'Login' 
  | 'SignUp' 
  | 'Home' 
  | 'Profile'
  | 'Breathing'
  | 'NasheedPlayer'
  | 'IslamicReminders'
  | 'NatureAmbience'
  | 'DailyMoodCheckIn'
  | 'CounselingBooking'
  | 'MoodDetails'
  | 'MoodHistory'
  | 'CalmZone'
  | 'RahmahChatbox'
  | 'TodoList';

export interface NavigationProps {
  onNavigate: (screen: ScreenName) => void;
}
