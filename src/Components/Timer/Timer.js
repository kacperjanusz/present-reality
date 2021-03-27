import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './timer.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Za późno...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Pozostało</div>
      <div className="value">{remainingTime}</div>
      <div className="text">sekund</div>
    </div>
  );
};

export const UrgeWithPleasureComponent = ({ onComplete }) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={10}
        onComplete={onComplete(false)}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
