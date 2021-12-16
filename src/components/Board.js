import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

  const oneD = [];

  // iterate through twoD aray, take each elem, iterate through each elem, then append to oneD
  for (let row of squares) {
    for (let element of row) {

      oneD.push(<Square id={element.id} value={element.value} onClickCallback={onClickCallback}/>);}
  // console.log(oneD);
  }
  return oneD;
};



const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>;
};

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
