import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div style={{display:'flex'}}>
      {days && (
        <div>
          <span >{formatTime(days)}</span > <span style={{color:"black"}}> Days Left</span>{" "}
        </div>
      )}
      <div style={{display:'flex', marginLeft:'10px',gap:'5px'}}>
        <span>{formatTime(hours)}</span><span style={{color:"black"}}>:</span>
        <span>{formatTime(minutes)}</span><span style={{color:"black"}}>:</span>
        <span>{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default Timer;
