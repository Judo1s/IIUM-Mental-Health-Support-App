import React, { useState, useEffect } from 'react';
import type { NavigationProps } from '../types';
import { ChevronLeft } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';

const BreathingExerciseScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [, setTimeLeft] = useState(4); // Start with Inhale 4s
  const [isActive] = useState(true);

  // Configuration for phases
  const PHASES = {
    Inhale: { duration: 4, label: 'Inhale', next: 'Hold' },
    Hold: { duration: 4, label: 'Hold', next: 'Exhale' },
    Exhale: { duration: 6, label: 'Exhale', next: 'Inhale' },
  };

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Transition to next phase
            const currentPhaseConfig = PHASES[phase];
            const nextPhase = currentPhaseConfig.next as 'Inhale' | 'Hold' | 'Exhale';
            setPhase(nextPhase);
            return PHASES[nextPhase].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  // Determine active labels based on phase
  // Note: The visual has 4 positions, but we have 3 phases.
  // We'll map them: Top=Inhale(active), Right=Hold, Bottom=Exhale. 
  // What about Left? Left says "Inhale" in image. 
  // Maybe cycle is Inhale -> Hold -> Exhale -> Inhale?
  // Let's highlight specific labels.
  
  const getLabelClass = (position: 'top' | 'right' | 'bottom' | 'left') => {
    let active = false;
    if (phase === 'Inhale' && (position === 'top' || position === 'left')) active = true;
    if (phase === 'Hold' && position === 'right') active = true;
    if (phase === 'Exhale' && position === 'bottom') active = true;

    return `breath-label label-${position} ${active ? 'active' : ''}`;
  };

  // Helper to format time as M:SS (even though we usually just show seconds, 
  // the design has 4:00 which looks like Minutes:Seconds? Or just 4.00?
  // Use 4:00 format contextually, but it counts down seconds? 
  // If it's 4 seconds, maybe it writes '4' or '0:04'.
  // The screenshot shows '4:00'. Is it 4 minutes total? 
  // Or is it a countdown of the phase "4.00"?
  // Given "Inhale 4s", it's likely seconds.
  // "4:00" might be 4 seconds formatted strange, or maybe 4 minutes session start?
  // I will assume it shows seconds left in phase. 
  // If I show '4:00', implies 4 minutes?
  // Let's try to match the format. If it's a timer, usually M:SS.
  // I will display just the second number if < 10? Or '0:04'.
  // Image shows '4:00'. That looks like 4 minutes.
  // Maybe proper breathing exercise is a 5 min session.
  // BUT the text "Inhale 4s" suggests the phase is short.
  // I will show the Phase Time Left.
  // Format: "4" -> "4"
  // Wait, if image says "4:00", maybe it means 4 minutes remaining in session?
  // And the circle just loops?
  // Let's implement a Session Timer (4:00) and the circle loops.
  // But usually precise timing is needed.
  // I will make the BIG number the Phase Timer. 
  // If it says 4:00, maybe it means 4.00s?
  // Let's stick to simple "4" or "0:04". 
  // Actually, I'll formatting as '0:04' matches '4:00' if i flipped it? 
  // No, 4:00 is definitely 4 minutes.
  // Use case: "Do this for 5 minutes".
  // Okay, I will add a Session Timer that counts down from 5:00.
  // And the circle animates continuously.
  // The big number in the screenshot is central.
  // "4:00"
  // It is likely the session timer.
  // I will change the large text to be the Session Timer.
  // And I will add a smaller indicator for the phase, OR just let the circle guide.
  // The labels highlight, so that guides the phase.
  
  const [sessionTime, setSessionTime] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (isActive && sessionTime > 0) {
      const sessTimer = setInterval(() => setSessionTime(t => t - 1), 1000);
      return () => clearInterval(sessTimer);
    }
  }, [isActive, sessionTime]);

  const formatSessionTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="container" style={{ 
      paddingBottom: '100px', 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      
      {/* --- Header --- */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
        <button 
          onClick={() => onNavigate('CalmZone')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '15px' }}
        >
          <ChevronLeft size={28} color="#333" />
        </button>
        <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 auto', transform: 'translateX(-20px)' }}>
          Breathing Exercise
        </h2>
      </div>

      <div className="breathing-wrapper" style={{ flex: 1, justifyContent: 'center' }}>
        
        {/* Circle & Dots */}
        <div className="breathing-circle-container">
          {/* SVG Ring */}
          <svg className="breathing-ring-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="breathing-ring-circle" />
            {/* Animated segment could go here, but simple dots are enough for now */}
          </svg>

          {/* Dots */}
          <div className="breath-dot dot-top"></div>
          <div className="breath-dot dot-right"></div>
          <div className="breath-dot dot-bottom"></div>
          <div className="breath-dot dot-left"></div>

          {/* Labels - Positioned relative to container but pushed out */}
          <div className={getLabelClass('top')}>Inhale</div>
          <div className={getLabelClass('right')}>Hold</div>
          <div className={getLabelClass('bottom')}>Exhale</div>
          <div className={getLabelClass('left')}>Inhale</div>
        </div>

        {/* Labels below */}
        <div className="label-container" style={{textAlign: 'center', marginTop: '-20px', color: '#ccc', fontWeight: 600}}>
           {/* Current Phase Text Display (Optional, not in image but helpful) 
               Image has "Exhale" below circle. 
               My .label-bottom handles "Exhale".
           */}
        </div>

        {/* Timer */}
        <div className="breath-timer-large">
          {formatSessionTime(sessionTime)}
        </div>

        {/* Instruction */}
        <p className="breath-instruction-text">
          Follow the circle : Inhale 4s,<br />
          Hold 4s, Exhale 6s
        </p>

      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default BreathingExerciseScreen;