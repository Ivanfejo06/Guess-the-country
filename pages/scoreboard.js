// pages/scoreboard.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Scoreboard = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('highscores')) || [];
    storedScores.sort((a, b) => b.score - a.score);
    setHighScores(storedScores);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Scoreboard</h1>
      <ul className={styles.scoreList}>
        {highScores.map((score, index) => (
          <li key={score.id} className={styles.scoreItem}>
            {index + 1}. {score.name}: {score.score} points ({score.correctAnswers}/{score.totalAnswers})
          </li>
        ))}
      </ul>
      <Link href="/">
        <button className={styles['scoreboard-button']}>Back to Game</button>
      </Link>
    </div>
  );
};

export default Scoreboard;