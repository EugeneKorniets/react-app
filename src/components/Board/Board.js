import React from 'react'

import './Board.css'

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
    const status = `Следующий ход: ${this.state.isXNext ? 'X' : 'O'}`

    return (
      <div className="board">
        <p className="board__title">Board</p>
        <p className="board__status">{ status }</p>
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
    squares[i] = this.state.isXNext ? 'X' : 'O'
    this.setState({
      squares,
      isXNext: !this.state.isXNext
    })
  }
}

export default Board
