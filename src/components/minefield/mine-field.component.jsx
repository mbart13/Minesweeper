import React from 'react'

import { useGlobalContext } from '../../context'
import Cell from '../cell/cell.component'
import './mine-field.component.css'

const MineField = () => {
  const { board } = useGlobalContext()
  return (
    <div className="field">
      {board.map((arr) => {
        return arr.map((cell) => {
          return <Cell key={cell.index} cell={cell} />
        })
      })}
    </div>
  )
}

export default MineField
