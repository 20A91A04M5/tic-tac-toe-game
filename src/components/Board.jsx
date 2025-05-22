

import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { checkWin } from '../utils/gameLogic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const initialGrid = Array(9).fill(null);

const Board = ({ categories }) => {
  const [grid, setGrid] = useState(initialGrid);
  const [turn, setTurn] = useState('player1');
  const [history, setHistory] = useState({ player1: [], player2: [] });
  const [winner, setWinner] = useState(null);
  const [bgEmoji, setBgEmoji] = useState('');

  useEffect(() => {
    // Set random background emoji from both categories
    const combined = [...categories.player1, ...categories.player2];
    const randomEmoji = combined[Math.floor(Math.random() * combined.length)];
    setBgEmoji(randomEmoji);
  }, [categories]);

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
      setWinner(player);
      showWinner(player);
    } else {
      setTurn(player === 'player1' ? 'player2' : 'player1');
    }
  };

  const showWinner = (player) => {
    MySwal.fire({
      title: `🎉 ${player.toUpperCase()} Wins!`,
      text: 'Click below to play again!',
      icon: 'success',
      confirmButtonText: 'Play Again',
      confirmButtonColor: '#3085d6',
      backdrop: true
    }).then(() => resetGame());
  };

  const resetGame = () => {
    setGrid(initialGrid);
    setHistory({ player1: [], player2: [] });
    setTurn('player1');
    setWinner(null);

    const combined = [...categories.player1, ...categories.player2];
    const randomEmoji = combined[Math.floor(Math.random() * combined.length)];
    setBgEmoji(randomEmoji);
  };

  return (
    <div className="text-center">
      {!winner && <h4 className="mb-3">{`${turn.toUpperCase()}'s Turn`}</h4>}

      <div
        className="board"
        style={{
          backgroundImage: `url("https://techstory.in/wp-content/uploads/2024/08/TicTacToeCoolMathGames.jpg)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '50px 50px',
        }}
      >
        {grid.map((cell, i) => (
          <Cell key={i} index={i} data={cell} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Board;
