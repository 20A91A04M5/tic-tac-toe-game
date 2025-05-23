import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <div className="poster-content">
        <h1 className="game-title">✨ Blink Tac Toe ✨</h1>
        <p className="subtitle">A Vanishing Emoji Twist on Classic Tic Tac Toe!</p>

        <img
          className="poster-image"
          src="/TicTacToe.jpg"
          alt="Tic Tac Toe Poster"
        />

        <button className="start-btn" onClick={onStart}>
          🎮 Start Game 
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
