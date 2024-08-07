// components/SkipButton.js
import styles from '../styles/Home.module.css';

const SkipButton = ({ timeLeft, setTimeLeft, setSelectedCountry, setTotalAnswers }) => {
  const handleSkipClick = () => {
    if (timeLeft > 10) {
      setTimeLeft(timeLeft - 10);
      setTotalAnswers(prevTotal => prevTotal + 1);
      setSelectedCountry();
    }
  };

  return (
    <button onClick={handleSkipClick} className={styles.skipButton}>Skip</button>
  );
};

export default SkipButton;
