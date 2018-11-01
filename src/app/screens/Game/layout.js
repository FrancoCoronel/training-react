
import Board from '../components/Board';
import './styles.css'

function GameLayout({status, squares, handleClick, moves }){
    return (
      <div className="game">
        <div className="game-board">∫
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

export default GameLayout;