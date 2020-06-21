import React from 'react';
import { CountdownTimerContainer } from './countdown-timer.styles'

const CountdownTimer = ({ timeLeft, timerComponents }) =>
{
  let days = timeLeft.days;
  let hours = timeLeft.hours;
  let minutes = timeLeft.minutes;
  let seconds = timeLeft.seconds;

  return(
    <CountdownTimerContainer>
        <div className="time-container">
          <h5>{days}</h5>
          <h4>DAYS</h4>
        </div>
        <div className="time-container">
          <h5>{hours}</h5>
          <h4>HOURS</h4>
        </div>
        <div className="time-container">
          <h5>{minutes}</h5>
          <h4>MINUTES</h4>
        </div>
        <div className="time-container">
          <h5>{seconds}</h5>
          <h4>SECONDS</h4>
        </div>

    </CountdownTimerContainer>
    )
}

export default CountdownTimer;


