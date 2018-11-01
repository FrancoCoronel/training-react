import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from '../Square';
import BoardLayout from './layout';
import './styles.css';

class Board extends Component {
    state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
    renderSquare = i =>  <Square value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />; 
    

    render() {
      return (
        <BoardLayout renderSquare={this.renderSquare} />
      );
    }
  }

  Board.propTypes = {
    value: PropTypes.string
  };

export default Board;