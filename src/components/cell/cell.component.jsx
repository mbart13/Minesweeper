import React from "react";
import './cell.component.css'
import {useGlobalContext} from "../../context";

const Cell = ({cell}) => {

    const { handleClick, handleRightClick } = useGlobalContext()

    const applyClass = () => {
        let cellStatus;

        if (cell.isRevealed && cell.isMined) {
            cellStatus = ' fired';
        } else if (cell.isFlagged) {
            cellStatus = ' flagged'
        } else if (cell.isRevealed) {
            cellStatus = ' revealed'
        }

        return cellStatus;
    }

    return (
        <div className={'cell' + (applyClass() || '')}
             onContextMenu={(e) => handleRightClick(e, cell)}
             onClick={() => handleClick(cell)}>
            <span className={cell.isMined ? 'hidden' : ''}>{cell.adjacentMines || ''}</span>
        </div>
    )
}

export default Cell
