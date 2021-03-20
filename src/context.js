import React, {useContext, useEffect, useState} from 'react'
import {StatesOfGame} from './status'
import cloneDeep from 'lodash/cloneDeep';


const NUMBER_OF_BOMBS = 10;
const NUMBER_OF_ROWS = 9;
const NUMBER_OF_COLUMNS = 8;

const initBoard = () => {
    const board = []

    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
        board.push([])
        for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
            board[i][j] = {
                index: `rowIndex: ${i}, columnIndex: ${j}`,
                rowIndex: i,
                columnIndex: j,
                isMined: false,
                adjacentMines: 0,
                isFlagged: false,
                isRevealed: false,
            }
        }
    }
    // place mines
    for (let i = 0; i < NUMBER_OF_BOMBS; i++) {
        let randomRow = Math.floor((Math.random() * NUMBER_OF_ROWS));
        let randomColumn = Math.floor((Math.random() * NUMBER_OF_COLUMNS));
        while (board[randomRow][randomColumn].isMined) {
            randomRow = Math.floor((Math.random() * NUMBER_OF_ROWS));
            randomColumn = Math.floor((Math.random() * NUMBER_OF_COLUMNS));
        }
        board[randomRow][randomColumn].isMined = true;
    }
    return board;
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [board, setBoard] = useState(initBoard());
    const [flagCounter, setFlagCounter] = useState(NUMBER_OF_BOMBS);
    const [gameStatus, setGameStatus] = useState(StatesOfGame.NOT_STARTED);

    const getAdjacentMines = (rowIndex, columnIndex) => {
        let numMines = 0;
        for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
            for (let j = columnIndex - 1; j <= columnIndex + 1; j++) {
                if (i >= 0 && i < board.length && j >= 0 && j < board[0].length && board[i][j].isMined) {
                    numMines++;
                }
            }
        }
        return numMines;
    }

    const revealEmptyCells = (clickedCell, updatedBoard) => {
        const { rowIndex, columnIndex } = clickedCell;
        const numMines =  getAdjacentMines(rowIndex, columnIndex)
        if (numMines) {
            updatedBoard[rowIndex][columnIndex].adjacentMines = numMines;
            updatedBoard[rowIndex][columnIndex].isRevealed = true;
        } else {
            for (let i = clickedCell.rowIndex - 1; i <= clickedCell.rowIndex + 1; i++) {
                for (let j = clickedCell.columnIndex - 1; j <= clickedCell.columnIndex + 1; j++) {
                    if (i >= 0 && i < updatedBoard.length && j >= 0 && j < updatedBoard[i].length && !updatedBoard[i][j].isRevealed && !updatedBoard[i][j].isMined) {
                        updatedBoard[i][j].isRevealed = true
                        revealEmptyCells(updatedBoard[i][j], updatedBoard)
                    }
                }
            }
        }

        return updatedBoard;
    }

    const showAllMines = () => {
        return (board.map(row => {
            return row.map(cell => {
                if (cell.isMined) {
                    return {...cell, isRevealed: true}
                }
                return cell;
            })
        }));
    }

    const handleClick = (clickedCell) => {
        const { rowIndex, columnIndex } = clickedCell;
        let updatedBoard = cloneDeep(board)

        if (clickedCell.isFlagged || gameStatus === StatesOfGame.GAME_OVER || gameStatus === StatesOfGame.GAME_WON) {
            return;
        }

        if (clickedCell.isMined && gameStatus === StatesOfGame.NOT_STARTED) {
            updatedBoard = initBoard()
            while (updatedBoard[rowIndex][columnIndex].isMined) {
                updatedBoard = initBoard()
            }
            clickedCell = updatedBoard[rowIndex][columnIndex]
        }

        if (clickedCell.isMined) {
            setGameStatus(StatesOfGame.GAME_OVER)
            updatedBoard = showAllMines();

        } else {
            updatedBoard = revealEmptyCells(clickedCell, updatedBoard)
        }

        if (gameStatus === StatesOfGame.NOT_STARTED) {
            setGameStatus(StatesOfGame.FIRST_CLICK)
        }

        setBoard(updatedBoard);

    }

    const handleRightClick = (event, cell) => {
        event.preventDefault();

        if (gameStatus === StatesOfGame.GAME_OVER) {
            return;
        }

        const { rowIndex, columnIndex } = cell;
        let updatedBoard = cloneDeep(board)

        if (!cell.isFlagged && !cell.isRevealed && flagCounter > 0) {
            updatedBoard[rowIndex][columnIndex].isFlagged = true;
            setFlagCounter(flagCounter - 1);
        } else if (cell.isFlagged) {
            updatedBoard[rowIndex][columnIndex].isFlagged = false;
            setFlagCounter(flagCounter + 1);
        }
        setBoard(updatedBoard);
    }

    const restart = () => {
        setBoard(initBoard())
        setFlagCounter(NUMBER_OF_BOMBS)
        setGameStatus(StatesOfGame.NOT_STARTED)
    }

    useEffect(() => {
        const isWin = () => {
            let isWin;
            for (let i = 0; i < NUMBER_OF_ROWS; i++) {
                for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
                    if (board[i][j].isMined) {
                        isWin = board[i][j].isFlagged
                    }

                    if (!board[i][j].isMined) {
                        isWin =  board[i][j].isRevealed;
                    }

                    if (!isWin)
                        return;
                }
            }

            return isWin
        }
        if (isWin()) {
            setGameStatus(StatesOfGame.GAME_WON)
        }
    }, [board])

    return (
        <AppContext.Provider
            value={{
                board,
                flagCounter,
                gameStatus,
                restart,
                handleClick,
                handleRightClick}}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }

