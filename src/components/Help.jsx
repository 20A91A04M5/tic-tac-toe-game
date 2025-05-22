import React from 'react';
import './Help.css'; 

const Help = () => (
  <div className="help-container">
    <div className="help-heading">🧠 Game Rules</div>
    <div className="marquee-container">
      <div className="marquee-content">
        <ul>
          <li>3x3 grid, 2 players take turns 🎮</li><br />
          <li>Each player selects an emoji category 😄</li><br />
          <li>Only 3 active emojis per player – oldest disappears (FIFO) 🔄</li><br />
          <li>Make 3 in a row to win ➡️ ⬇️ ➖</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Help;
