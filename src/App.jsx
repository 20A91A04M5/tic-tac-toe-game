import React, { useState } from 'react';
import Header from './components/Header';
import Help from './components/Help';
import CategorySelector from './components/CategorySelector';
import Board from './components/Board';
import './App.css';

function App() {
  const [categories, setCategories] = useState({ player1: [], player2: [] });
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="app container mt-4">
      <Header />
      {!gameStarted ? (
        <>
          <Help />
          <CategorySelector setCategories={setCategories} startGame={() => setGameStarted(true)} />
        </>
      ) : (
        <Board categories={categories} />
      )}
    </div>
  );
}

export default App;
