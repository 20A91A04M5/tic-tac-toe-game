export const checkWin = (grid, player) => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    if (pattern.every(i => grid[i]?.player === player)) {
      return pattern; 
    }
  }

  return null; 
};
