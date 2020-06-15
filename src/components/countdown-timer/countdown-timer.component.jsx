import React from 'react';
import { CountdownTimerContainer } from './countdown-timer.styles'

const CountdownTimer = ({ timeLeft, timerComponents }) =>
{
  const days = timerComponents[0] ? timerComponents[0].props.children[0] : '0';
  const hours = timerComponents[1] ? timerComponents[1].props.children[0] : '0';
  const minutes = timerComponents[2] ? timerComponents[2].props.children[0] : '0';
  const seconds = timerComponents[3] ? timerComponents[3].props.children[0] : '0';
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


