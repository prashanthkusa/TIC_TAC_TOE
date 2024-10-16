import React, { useState } from 'react';
import Square from './Square';

const Table = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (row, col) => {
    if (board[row][col] !== '') return;
    const newBoard = [...board];
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWin(newBoard);
  };
  const checkWin = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Logic to check win
    for (const [a, b, c] of winConditions) {
      if (board[Math.floor(a / 3)][a % 3] &&
          board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] &&
          board[Math.floor(a / 3)][a % 3] === board[Math.floor(c / 3)][c % 3]) {
        alert(`Congratulations : ${board[Math.floor(a / 3)][a % 3]}`);
        setBoard([
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]);
        return;
      }
    }
  };

  return (
    <section>
      <div id='head'>
      <h1>Tic-Tac-Toe</h1>
      </div>
      <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((col, colIndex) => (
            <Square
              key={colIndex}
              value={col}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}-
        </div>
      ))}
    </div>
    </section>
  );
};

export default Table;