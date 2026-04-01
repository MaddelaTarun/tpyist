import React, { useState } from 'react';
import { useTimer } from './hooks/useTimer';
import TextDisplay from './components/TextDisplay';
import InputField from './components/InputField';

const App: React.FC = () => {
  // Source of truth for the text
  const [targetText] = useState("the quick brown fox jumps over the lazy dog");
  const [userInput, setUserInput] = useState("");

  // Using our professional custom hook
  const { timeLeft, isActive, startTimer, resetTimer } = useTimer(30);

  // Logic: Handle typing and auto-start the timer
  const handleInputChange = (newValue: string) => {
    // 1. If the timer isn't running yet, start it on the first character
    if (!isActive && newValue.length > 0 && timeLeft > 0) {
      startTimer();
    }
    
    // 2. Only allow typing if there is time left
    if (timeLeft > 0) {
      setUserInput(newValue);
    }
  };

  // Logic: Reset the whole game
  const handleReset = () => {
    setUserInput("");
    resetTimer();
  };

  return (
    <div style={{ 
      backgroundColor: '#121212', 
      minHeight: '100vh', 
      color: '#fff', 
      padding: '50px 20px',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#4ade80' }}>tpyist</h1>
        
        {/* Header Stats */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ fontSize: '1.2rem' }}>Time Left: <strong>{timeLeft}s</strong></div>
          <button 
            onClick={handleReset}
            style={{ 
              background: 'none', 
              border: '1px solid #444', 
              color: '#999', 
              cursor: 'pointer',
              padding: '5px 15px',
              borderRadius: '4px'
            }}
          >
            Restart (Esc)
          </button>
        </div>

        {/* The Components we built */}
        <TextDisplay targetText={targetText} userInput={userInput} />
        
        <InputField 
          value={userInput} 
          onChange={handleInputChange} 
          disabled={timeLeft === 0} 
        />

        {/* Game Over Message */}
        {timeLeft === 0 && (
          <div style={{ marginTop: '30px', textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: '#f87171' }}>Time's Up!</h2>
            <p>Final Score coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;