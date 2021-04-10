import React, { useState } from 'react';
import { CountdownTimerContainer } from './countdown-timer.styles'

const CountdownTimer = () =>
{
  const dropDate = new Date("2021/4/16 18:00:00 EST");
  
  const calculateTimeLeft = () => {
    const startDate = new Date();

    const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
    const endDateInUTC = new Date(dropDate.getUTCFullYear(), dropDate.getUTCMonth(), dropDate.getUTCDate(), dropDate.getUTCHours(), dropDate.getUTCMinutes(), dropDate.getUTCSeconds());
    const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  let days = timeLeft.days; 
  
  let hours = timeLeft.hours;
  let minutes = timeLeft.minutes;
  let seconds = timeLeft.seconds;
  return(
    
    timeLeft.seconds > 0 || timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0?
        <CountdownTimerContainer>
        <div className="countdown-container">
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
        </div>
        
        </CountdownTimerContainer>
      :
        <div></div>
    )
}

export default CountdownTimer;


