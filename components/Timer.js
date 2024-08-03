// components/Timer.js
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <div className={styles.timer}>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Timer;