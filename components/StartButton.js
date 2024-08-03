// components/StartButton.js
const StartButton = ({ onStart }) => {
    const handleStart = (duration) => {
      onStart(duration);
    };
  
    return (
      <div>
        <h2>Select Game Duration</h2>
        <button onClick={() => handleStart(1)}>1 Minute</button>
        <button onClick={() => handleStart(3)}>3 Minutes</button>
        <button onClick={() => handleStart(5)}>5 Minutes</button>
      </div>
    );
  };
  
  export default StartButton;  