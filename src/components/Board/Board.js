import React from 'react'

import './Board.scss'

import Square from '../Square/Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      isXNext: true
    }
  }

  render () {
    const winner = this.calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Выиграл ' + winner
    } else {
      status = `Следующий ход: ${this.state.isXNext ? 'X' : 'O'}`
    }

    return (
      <div className="board">
        <p className="board__title">Board</p>
        <p className="board__status">{ status }</p>
        <div className="board__table">
          <div className="board__row">
            <div className="board__cell">
              {this.renderSquare(0)}
            </div>
            <div className="board__cell">
              {this.renderSquare(1)}
            </div>
            <div className="board__cell">
              {this.renderSquare(2)}
            </div>
          </div>
          <div className="board__row">
            <div className="board__cell">
              {this.renderSquare(3)}
            </div>
            <div className="board__cell">
              {this.renderSquare(4)}
            </div>
            <div className="board__cell">
              {this.renderSquare(5)}
            </div>
          </div>
          <div className="board__row">
            <div className="board__cell">
              {this.renderSquare(6)}
            </div>
            <div className="board__cell">
              {this.renderSquare(7)}
            </div>
            <div className="board__cell">
              {this.renderSquare(8)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderSquare (i) {
    return (
      <Square
        value={ this.state.squares[i] }
        onClick={
          () => this.handleClick(i)
        }
      />
    )
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    if (this.calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.isXNext ? 'X' : 'O'
    this.setState({
      squares,
      isXNext: !this.state.isXNext
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
}

export default Board
