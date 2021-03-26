import React from 'react'
import MineField from "../../components/minefield/mine-field.component";
import ControlPanel from "../../components/control-panel/control-panel.component";
import {useGlobalContext} from "../../context";
import './minesweeper.component.css'
import ShowHelpModal from '../../components/modal/modal.component'

const Minesweeper = () => {
  const { board, flagCounter } = useGlobalContext();

  return (
    <div className="container">
      <ShowHelpModal/>
      <main className="main-section">
        <section className='minesweeper'>
          <ControlPanel flagCounter={flagCounter} />
          <MineField board={board} />
        </section>
      </main>
    </div>
  )
}

export default Minesweeper
