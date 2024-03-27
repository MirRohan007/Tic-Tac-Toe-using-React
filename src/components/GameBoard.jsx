import React from "react";


const GameBoard = ({ onSelectSquare, board }) => {
    
//   const handleSelectSquare = (rowIndex, colIndex) => {
//     setGameBoard((prevGameBoard) => {
//       const updatedGameBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return updatedGameBoard;
//     });
//     onSelectSquare();
//   };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
