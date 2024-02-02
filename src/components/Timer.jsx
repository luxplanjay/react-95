import { useEffect, useRef, useState } from 'react';

export const Timer = () => {
  const [clicks, setClicks] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      console.log(Date.now());
    }, 2000);
    console.log(intervalRef.current);

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, []);

  const stopInterval = () => {
    console.log(intervalRef.current);
    window.clearInterval(intervalRef.current);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clicks: {clicks}</button>
      <button onClick={stopInterval}>Stop interval</button>
    </div>
  );
};
