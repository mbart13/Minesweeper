import React from 'react'
import MineField from '../../components/minefield/mine-field.component'
import ControlPanel from '../../components/control-panel/control-panel.component'
import './minesweeper.component.css'
import ShowHelpModal from '../../components/modal/modal.component'

const Minesweeper = () => {
  return (
    <div className="container">
      <ShowHelpModal />
      <main className="main-section">
        <section className="minesweeper">
          <ControlPanel />
          <MineField />
        </section>
      </main>
    </div>
  )
}

export default Minesweeper
