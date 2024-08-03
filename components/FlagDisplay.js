// components/FlagDisplay.js
import styles from '../styles/Home.module.css';

const FlagDisplay = ({ flagUrl }) => {
  return (
    <div className={styles.flagContainer}>
      <img src={flagUrl} alt="Country flag" className={styles.flagImage} />
    </div>
  );
};

export default FlagDisplay;