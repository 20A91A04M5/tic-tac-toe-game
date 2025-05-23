
import React from 'react';
import './Cell.css';

const Cell = ({ index, data, handleClick, isWinning }) => (
  <div
    id={`cell-${index}`}
    className={`cell ${isWinning ? 'winner-cell' : ''}`}
    onClick={() => handleClick(index)}
  >
    <span className="emoji">{data?.emoji}</span>
  </div>
);

export default Cell;

