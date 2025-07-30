import React, { useState, useEffect } from 'react';

// 1. La interfaz ahora espera un 'number' en lugar de 'string'
interface CountdownTimerProps {
  targetTimestamp: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTimestamp }) => {
  const calculateTimeLeft = () => {
    // 2. La lógica de cálculo ahora usa los timestamps numéricos. Es más rápido y fiable.
    const difference = targetTimestamp - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]); // 3. La dependencia del efecto ahora es el timestamp

  const timerComponents = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  const isTimeUp = Object.values(timeLeft).every(val => val === 0);

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-white">
      {isTimeUp ? (
        <div className="col-span-4 text-center text-2xl font-bold">¡La oferta ha terminado!</div>
      ) : (
        timerComponents.map(({ label, value }) => (
          <div key={label} className="text-center">
            <span className="text-3xl md:text-4xl font-bold">{String(value).padStart(2, '0')}</span>
            <span className="block text-xs uppercase tracking-wider">{label}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CountdownTimer;