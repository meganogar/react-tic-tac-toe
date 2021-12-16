import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }
  return squares;
};

// What generateSquares returns
// [
//   [ { id: 0, value: '' }, { id: 1, value: '' }, { id: 2, value: '' } ],
//   [ { id: 3, value: '' }, { id: 4, value: '' }, { id: 5, value: '' } ],
//   [ { id: 6, value: '' }, { id: 7, value: '' }, { id: 8, value: '' } ]
// ]

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const [playerTurn, setPlayerTurn] = useState(false);
  

  const onClickCallback = (updateSquare) => {
    console.log(playerTurn);
    setPlayerTurn(!playerTurn);
    const newSquareList = [];
    
    for (let row of squares) {
      for (let element of row) {
        newSquareList.push(element);



    const squareInfo = newSquareList.map(square => {
        if (square.id === updateSquare.id) {
          return updateSquare;
        } else {
          return square;
        }
    });

    let reshapedInfo = []
    let rowSquares = []
    // for (let i, i < squareInfo.length, i++)
    for (let square in squareInfo) {
      if ((square+1)%3 ==0) {
        reshapedInfo.push(rowSquares)
      }
      else {
        rowSquares.push(squareInfo[square])
      }
    }


    setSquares(squareInfo);

    
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if
    //    all three squares have the same value.
  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <h3>BLERG: {playerTurn}</h3>
        <button>Reset Game</button>
      </header>
      <main>
        <Board className='grid' squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
};

export default App;
