// components/PlayerNameInput.js
import { useState } from 'react';
import styles from '../styles/Home.module.css'; // Importamos el archivo CSS

const PlayerNameInput = ({ onNameAndDurationSubmit }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameAndDurationSubmit(name, duration);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['name-input-form']}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
        className={styles['name-input']}
      />
      <div className={styles['duration-buttons']}>
        <button type="button" onClick={() => setDuration(1)} className={`${styles['duration-button']} ${duration === 1 ? styles.active : ''}`}>1 Minute</button>
        <button type="button" onClick={() => setDuration(3)} className={`${styles['duration-button']} ${duration === 3 ? styles.active : ''}`}>3 Minutes</button>
        <button type="button" onClick={() => setDuration(5)} className={`${styles['duration-button']} ${duration === 5 ? styles.active : ''}`}>5 Minutes</button>
      </div>
      <button type="submit" className={styles['start-button']}>Start Game</button>
    </form>
  );
};

export default PlayerNameInput;