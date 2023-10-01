// StartMenu.js
import React from 'react';
import './Dino.css'; // Import the Dino.css file

const StartMenu = ({ onStartClick }) => {
  return (
    <div className="start-menu">
      <h1>Welcome to</h1>
      <h1>
        <span className="dash">Dash</span>
        <span className="runner">Runner</span>
      </h1>
      <button onClick={onStartClick}>Start Game</button>
    </div>
  );
};

export default StartMenu;
