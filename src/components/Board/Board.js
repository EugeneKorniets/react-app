import React from 'react'

import './Board.css'

import Square from '../Square/Square'

class Board extends React.Component {
  render () {
    return (
      <div className="board">
        <p className="board__title">Board</p>
        <Square/>
      </div>
    )
  }
}

export default Board
