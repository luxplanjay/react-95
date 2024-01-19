import { Reader } from './Reader';
import articles from '../articles.json';
import { useState, useEffect } from 'react';

// App mounts > App unmounts > App mounts

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem('number-of-clicks');
  if (savedClicks !== null) {
    return JSON.parse(savedClicks);
  }
  return 0;
};

export const App = () => {
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log('code inside useEffect', clicks);
    window.localStorage.setItem('number-of-clicks', clicks);
  }, [clicks]);

  useEffect(() => {
    console.log('Log wheh date state changes', date);
  }, [date]);

  useEffect(() => {
    console.log('Effect on mount');
    const id = setInterval(() => {
      console.log(Date.now());
    }, 2000);

    return () => {
      console.log('effect cleanup');
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>

      <hr />
      <Reader items={articles} />
    </>
  );
};
