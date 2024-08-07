// components/HelpButton.js
import styles from '../styles/Home.module.css';

const HelpButton = ({ timeLeft, setTimeLeft, hint, setHint, originalName, setSelectedCountry, setTotalAnswers }) => {
  const handleHelpClick = () => {
    if (timeLeft > 5) {
      setTimeLeft(timeLeft - 5);

      // Lógica para mostrar una pista
      const unrevealedIndexes = [];
      for (let i = 0; i < hint.length; i++) {
        if (hint[i] === '_') {
          unrevealedIndexes.push(i);
        }
      }

      if (unrevealedIndexes.length > 0) {
        const randomIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];
        const newHint = hint.split('');
        newHint[randomIndex] = originalName[randomIndex];
        setHint(newHint.join(''));

        // Si todas las letras están reveladas, pasar a la siguiente bandera sin sumar puntos
        if (newHint.join('') === originalName) {
          setTotalAnswers(prevTotal => prevTotal + 1);
          setSelectedCountry();
        }
      }
    }
  };

  return (
    <button onClick={handleHelpClick} className={styles.helpButton}>Help</button>
  );
};

export default HelpButton;