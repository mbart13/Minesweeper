import React from 'react'
import { Link } from 'react-router-dom';
import bomb from '../../assets/bomb.svg'
import './Intro.css'

const Intro = () => {

  return (
    <div>
      <header className="App-header">
        <img src={bomb} className="bomb bomb-large" alt="logo" />
        <Link className="link" to="/game">Start Game</Link>
      </header>
    </div>
  )
}

export default Intro
