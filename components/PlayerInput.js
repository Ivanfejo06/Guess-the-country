// components/PlayerInput.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const PlayerInput = ({ selectedCountry, setScore, setCorrectAnswers, setTotalAnswers, setSelectedCountry }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalAnswers(prev => prev + 1);
    if (inputValue.toLowerCase() === selectedCountry.name.toLowerCase()) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setScore(prev => prev - 1);
    }
    setInputValue('');
    setSelectedCountry();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.playerInputForm}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter country name"
        required
        className={styles.playerInput}
      />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default PlayerInput;