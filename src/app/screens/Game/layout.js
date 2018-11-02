
import React from 'react';
import Board from '../../components/Board';
import PropTypes from 'prop-types';
import './styles.css';

function GameLayout({status, squares, handleClick, moves }){
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
}

GameLayout.propTypes = {
  status: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  moves: PropTypes.arrayOf(PropTypes.string),
  squares: PropTypes.arrayOf(PropTypes.string)
}

export default GameLayout;