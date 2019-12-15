import React from 'react'
import logo from './assets/logo.svg'
import './App.css'

import Game from './components/Game/Game'

function App () {
  return (
    <div className="app">
      <header className="app__header">
        <img
          src={logo}
          className="app__logo"
          alt="logo"
        />
      </header>
      <main className="app__body">
        <Game/>
      </main>
    </div>
  )
}

export default App
