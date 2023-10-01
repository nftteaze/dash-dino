// App.js
import React, { useState } from 'react';
import ChromeDinoGame from 'react-chrome-dino';
import './lib/components/Dino.css';
import StartMenu from './lib/components/StartMenu';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  return (
    <div className="app-container">
      {!gameStarted ? (
        <StartMenu onStartClick={handleStartClick} />
      ) : (
        <>
          <h1 className="title">
            <span className="dash black">Dash</span>
            <span className="dash">Runner</span>
          </h1>
          <ChromeDinoGame />
        </>
      )}
    </div>
  );
};

export default App;
