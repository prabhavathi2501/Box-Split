import React, { useState } from 'react';


const BoxSplit = () => {
  // Initial size of the square
  const initialSize = 600;

  // State to hold the squares and their position (x, y), size and depth level of splits
  const [squares, setSquares] = useState([
    { x: 0, y: 0, size: initialSize, depth: 0 }
  ]);

  // Function to handle click and split a square
  const handleClick = (x, y, size, depth) => {
    // If a square is clicked, split it into 4 smaller squares
    const newSquares = squares.filter(
      (square) => !(square.x === x && square.y === y && square.size === size)
    );

    // Calculate new size (half of the clicked square's size)
    const newSize = size / 2;
    const nextDepth = depth + 1;

    // Add the 4 new smaller squares
    newSquares.push(
      { x, y, size: newSize, depth: nextDepth },
      { x: x + newSize, y, size: newSize, depth: nextDepth },
      { x, y: y + newSize, size: newSize, depth: nextDepth },
      { x: x + newSize, y: y + newSize, size: newSize, depth: nextDepth }
    );

    // Update the state with new squares
    setSquares(newSquares);
  };

  return (
    <div className="container">
      {squares.map((square) => (
        <div
          key={`${square.x}-${square.y}-${square.size}`}
          className="square"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            top: `${square.y}px`,
            left: `${square.x}px`,
          }}
          onClick={() => handleClick(square.x, square.y, square.size, square.depth)}
        />
      ))}
    </div>
  );
};

export default BoxSplit;
