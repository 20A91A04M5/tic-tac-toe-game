
import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { checkWin } from '../utils/gameLogic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Confetti from 'react-confetti';

const MySwal = withReactContent(Swal);
const initialGrid = Array(9).fill(null);

const Board = ({ categories, goBackToCategorySelection }) => {
  const [winningCells, setWinningCells] = useState([]);
  const [grid, setGrid] = useState(initialGrid);
  const [turn, setTurn] = useState('player1');
  const [history, setHistory] = useState({ player1: [], player2: [] });
  const [winner, setWinner] = useState(null);
  const [winnerCategory, setWinnerCategory] = useState('');
  const [bgEmoji, setBgEmoji] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    const combined = [...categories.player1, ...categories.player2];
    const randomEmoji = combined[Math.floor(Math.random() * combined.length)];
    setBgEmoji(randomEmoji);

    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [categories]);

  const getCategoryInfo = (selectedEmojis) => {
    const entry = Object.entries(categories).find(([_, emojis]) =>
      JSON.stringify(emojis) === JSON.stringify(selectedEmojis)
    );

    if (entry) {
      const [name, emojis] = entry;
      return { name, emoji: emojis[0] };
    }

    return { name: 'Unknown', emoji: '❓' };
  };

  const getCategoryName = (emoji) => {
    for (const [name, emojis] of Object.entries(categories)) {
      if (emojis.includes(emoji)) {
        return name;
      }
    }
    return '';
  };

  const playVictorySound = () => {
    const audio = new Audio('/victory.mp3');
    audio.play();
  };

  const handleClick = (index) => {
    if (grid[index] || winner) return;

    const player = turn;
    const emojiSet = categories[player];
    const emoji = emojiSet[Math.floor(Math.random() * emojiSet.length)];

    let newGrid = [...grid];
    let newHistory = { ...history };

    if (history[player].length === 3) {
      const oldIndex = history[player][0].index;
      newGrid[oldIndex] = null;
      newHistory[player].shift();
    }

    newGrid[index] = { emoji, player };
    newHistory[player].push({ index, emoji });

    const result = checkWin(newGrid, player);
    setGrid(newGrid);
    setHistory(newHistory);

    if (result) {
      const winningCategory = getCategoryName(emoji);
      setWinner(player);
      setWinnerCategory(winningCategory);
      setWinningCells(result);
      setShowCelebration(true);
      playVictorySound();
      setScores(prev => ({ ...prev, [player]: prev[player] + 1 }));
      setTimeout(() => showWinner(player, winningCategory, result, newGrid), 1500);
    } else {
      setTurn(player === 'player1' ? 'player2' : 'player1');
    }
  };

  const showWinner = (player, categoryName, winningCells, currentGrid) => {
    const emojis = winningCells.map(index => currentGrid[index]?.emoji || '').join(' ➡️ ');

    setTimeout(() => {
      MySwal.fire({
        title: `🎉 ${categoryName} Wins!`,
        html: `<div style="font-size: 2rem;">${emojis}</div><br/><strong>${player.toUpperCase()}</strong> won with these emojis!`,
        icon: 'success',
        confirmButtonText: 'Play Again',
        confirmButtonColor: '#3085d6',
        backdrop: true
      }).then(() => resetGame());
    }, 500);
  };

  const resetGame = () => {
    setGrid(initialGrid);
    setHistory({ player1: [], player2: [] });
    setTurn('player1');
    setWinner(null);
    setWinnerCategory('');
    setWinningCells([]);
    setShowCelebration(false);

    const combined = [...categories.player1, ...categories.player2];
    const randomEmoji = combined[Math.floor(Math.random() * combined.length)];
    setBgEmoji(randomEmoji);
  };

  return (
    <div className="text-center position-relative">
      {!winner && <h4 className="mb-3 text-light">{`${turn.toUpperCase()}'s Turn`}</h4>}
      {winner && <h2 className="text-warning">{winnerCategory} Category Wins! 🏆</h2>}

      <div
        className="board"
        style={{
          backgroundImage: `url("/TicTacToe.jpg")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '50px 50px'
        }}
      >
        {grid.map((cell, i) => (
          <Cell
            key={i}
            index={i}
            data={cell}
            handleClick={handleClick}
            isWinning={Array.isArray(winningCells) && winningCells.includes(i)}
          />
        ))}
      </div>

      <div className="text-light mt-4 d-flex flex-column align-items-center scoreboard">
        <h5 className="text-primary">🎯 Scoreboard</h5>

        <p className="mb-1">
          Player 1 (
          <span className="text-warning">
            {getCategoryInfo(categories.player1).emoji} {getCategoryInfo(categories.player1).name}
          </span>) — <strong>{scores.player1}</strong>
        </p>

        <p className="mb-3">
          Player 2 (
          <span className="text-warning">
            {getCategoryInfo(categories.player2).emoji} {getCategoryInfo(categories.player2).name}
          </span>) — <strong>{scores.player2}</strong>
        </p>

        <button className="btn btn-outline-primary mt-3" onClick={goBackToCategorySelection}>
          🔁 Back
        </button>
      </div>

      {showCelebration && (
        <>
          <DotLottieReact
            src="https://lottie.host/b273ea46-036e-49b6-8e63-01163740f2d7/VADaRD7So5.lottie"
            loop
            autoplay
            style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}
          />
          <Confetti width={dimensions.width} height={dimensions.height} />
          <div className="fireworks"></div>
        </>
      )}
    </div>
  );
};

export default Board;
