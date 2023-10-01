// StartMenu.js
import React from 'react';

const StartMenu = ({ onStartClick }) => (
  <div className="start-menu">
    <h1>Welcome to Dash Runner</h1>
    <button onClick={onStartClick}>Start Game</button>
  </div>
);

export default StartMenu;
