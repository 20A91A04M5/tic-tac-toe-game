
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Help from './components/Help';
import CategorySelector from './components/CategorySelector';
import Board from './components/Board';
import './App.css';

function App() {
  const [categories, setCategories] = useState({ player1: [], player2: [] });
  const [gameStarted, setGameStarted] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const startGameFlow = () => {
    setShowLanding(false);
  };

  return (
    <div className="app container mt-4">
      {showLanding ? (
        <LandingPage onStart={startGameFlow} />
      ) : !gameStarted ? (
        <>
          <Header />
          <Help />
          <CategorySelector setCategories={setCategories} startGame={() => setGameStarted(true)} />
        </>
      ) : (
        <>
          <Header /> 
          <Board categories={categories} />
        </>
      )}
    </div>
  );
}

export default App;
