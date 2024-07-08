import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  eventDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {
      dias: 0,
      hora: 0,
      minutos: 0,
      // segundos: 0,
    };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hora: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        // segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mr-2">
        <span className="font-bold text-gray-900">{timeLeft[interval as keyof typeof timeLeft]}</span> {interval}
      </span>
    );
  });

  return (
    <div className="flex  justify-center items-center text-lg text-gray-700">
      {timerComponents.length ? timerComponents : <span>Event is here!</span>}
    </div>
  );
};

export default CountdownTimer;
