import React from "react";
import Cell from "../cell/cell.component";
import './mine-field.component.css'

const MineField = ({board}) => {

    return (
      <div className="field">
        {board.map(arr => {
          return arr.map(cell => {
            return <Cell key={cell.index} cell={cell} />
          })
        })}
      </div>
    )
}

export default MineField
