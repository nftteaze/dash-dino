import React, { useState, useEffect } from 'react';
import ChromeDinoGame from 'react-chrome-dino';
import './lib/components/Dino.css';
import StartMenu from './lib/components/StartMenu';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevent spacebar from toggling night mode when the game is active
      if (event.keyCode === 32 && gameStarted) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  return (
    <div className="app-container">
      {!gameStarted ? (
        <StartMenu onStartClick={handleStartClick} />
      ) : (
        <>
          <h1 className={`title ${isNightMode ? 'night-mode' : ''}`}>
            <span className="dash">Dash</span>
            <span className="runner">Runner</span>
          </h1>
          <ChromeDinoGame />
        </>
      )}
    </div>
  );
};

export default App;
