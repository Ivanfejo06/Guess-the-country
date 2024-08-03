import styles from '../styles/Home.module.css';

const GameSummary = ({ score, correctAnswers, totalAnswers }) => {
  return (
    <div className={styles.gameSummary}>
      <h2>Game Over</h2>
      <p>Score: {score}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Total Answers: {totalAnswers}</p>
    </div>
  );
};

export default GameSummary;