// StartMenu.js

import React from 'react';
import './StartMenu.css';

const StartMenu = ({ onStartClick }) => {
  return (
    <div className="start-menu">
      <h1><span className="dash">Dash</span><span className="runner">Runner</span></h1>
      <button onClick={onStartClick}>Start Game</button>
    </div>
  );
};

export default StartMenu;
