// components/HelpButton.js
import styles from '../styles/Home.module.css';

const HelpButton = ({ timeLeft, setTimeLeft }) => {
  const handleHelpClick = () => {
    setTimeLeft(timeLeft - 5);
    // Lógica para mostrar una pista
  };

  return (
    <button onClick={handleHelpClick} className={styles.helpButton}>Help</button>
  );
};

export default HelpButton;