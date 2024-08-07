import { useState, useEffect } from 'react';
import axios from 'axios';
import FlagDisplay from '../components/FlagDisplay';
import PlayerInput from '../components/PlayerInput';
import Timer from '../components/Timer';
import HelpButton from '../components/HelpButton';
import SkipButton from '../components/SkipButton';
import PlayerNameInput from '../components/PlayerNameInput';
import GameSummary from '../components/GameSummary';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameDuration, setGameDuration] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const selectRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomIndex];
    setSelectedCountry(country);
    setHint('_'.repeat(country.name.length));
  };

  const handleNameAndDurationSubmit = (name, duration) => {
    setPlayerName(name);
    setGameDuration(duration * 60);
    setTimeLeft(duration * 60);
    setIsGameStarted(true);
    setIsGameOver(false);
    setScore(0);
    setCorrectAnswers(0);
    setTotalAnswers(0);
    selectRandomCountry();
  };

  useEffect(() => {
    if (timeLeft <= 0 && isGameStarted) {
      setIsGameOver(true);
      setIsGameStarted(false);

      const playerData = {
        name: playerName,
        score: score,
        correctAnswers: correctAnswers,
        totalAnswers: totalAnswers,
        id: Date.now() // Unique ID based on timestamp
      };

      // Save to localStorage
      const highScores = JSON.parse(localStorage.getItem('highscores')) || [];
      highScores.push(playerData);
      localStorage.setItem('highscores', JSON.stringify(highScores));
    }
  }, [timeLeft, isGameStarted]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Guess the Country</h1>
      {isGameStarted ? (
        <>
          {selectedCountry && <FlagDisplay flagUrl={selectedCountry.flag} />}
          <p>{hint}</p>
          <PlayerInput
            selectedCountry={selectedCountry}
            setScore={setScore}
            setCorrectAnswers={setCorrectAnswers}
            setTotalAnswers={setTotalAnswers}
            setSelectedCountry={selectRandomCountry}
          />
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          <div className={styles.buttonContainer}>
            <HelpButton
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              hint={hint}
              setHint={setHint}
              originalName={selectedCountry ? selectedCountry.name : ''}
              setSelectedCountry={selectRandomCountry}
              setTotalAnswers={setTotalAnswers}
            />
            <SkipButton
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              setSelectedCountry={selectRandomCountry}
              setTotalAnswers={setTotalAnswers}
            />
          </div>
          <div className={styles['score-info']}>
            <p>Score: {score}</p>
            <p>Correct Answers: {correctAnswers}/{totalAnswers}</p>
          </div>
        </>
      ) : (
        <>
          {!isGameOver ? (
            <PlayerNameInput onNameAndDurationSubmit={handleNameAndDurationSubmit} />
          ) : (
            <GameSummary score={score} correctAnswers={correctAnswers} totalAnswers={totalAnswers} />
          )}
        </>
      )}
      {!isGameStarted && (
        <Link href="/scoreboard" legacyBehavior>
          <button className={styles['scoreboard-button']}>Go to Scoreboard</button>
        </Link>
      )}
    </div>
  );
};

export default Home;