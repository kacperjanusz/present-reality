import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './timer.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Za późno...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
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
        // @ts-ignore
        colors={[['#F7B801', 0.33], ['#d87f3f']]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
