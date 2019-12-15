import React from 'react'
import Board from '../Board/Board'

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <h1 className="game__title">Tic Tac Toe</h1>
        <div className="game__board">
          <Board/>
        </div>
      </div>
    )
  }
}

export default Game
